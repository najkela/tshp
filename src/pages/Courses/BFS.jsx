import { collection, query, orderBy, addDoc, onSnapshot, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useAuth } from '../../contexts/authContext';
import './DFS.css';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const DFS = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const [username, setUsername] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState('');
  const dropdownRef = useRef(null); // Referenca za dropdown

  useEffect(() => {
    const fetchUsername = async () => {
      if (currentUser) {
        try {
          const userDoc = doc(db, 'users', currentUser.uid); // Referenca na dokument
          const userSnap = await getDoc(userDoc); // Dohvati podatke dokumenta
          if (userSnap.exists()) {
            setUsername(userSnap.data().username || 'Anonimni kul korisnik'); // Postavi username
          } else {
            console.error('Dokument ne postoji!');
          }
        } catch (error) {
          console.error('Greška pri dohvatanju podataka:', error);
        }
      }
    };

    fetchUsername();
  }, [currentUser]);

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(`/${path}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Togluje dropdown
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setError('');
    } catch (error) {
      setError('Greška pri izlogovanju!');
    }
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false); // Zatvori dropdown
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick); // Čišćenje eventa
    };
  }, [isDropdownOpen]);
  
    const [messages, setMessages] = useState([]);
    const [formValue, setFormValue] = useState("");

    useEffect(() => {
        const messagesRef = collection(db, "messages", "rekurzija", "messagesRekurzija");
        const q = query(messagesRef, orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messageData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(messageData);
        });

        return unsubscribe;

    }, []);


    const sendMessage = async (e) => {
        e.preventDefault();
        if (!formValue.trim()) return;

        const messagesRef = collection(db, "messages", "rekurzija", "messagesRekurzija");
        await addDoc(messagesRef, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid: currentUser.uid,
            displayName: currentUser.displayName || "Anonimni kul user", //Trebalo bi da uvek postoji display name, ali ako neko sjebe sajt zasluzuje da bude "anonimni kul user"
        });

        setFormValue("");
    };

    return (
        <>
        <nav className='navbar'>
          <Link to="/" className="logo"><h1>TSHP</h1></Link>
          <ul>
          <li><Link to="/courses" className="nav-link username">Lessons</Link></li>
            {!userLoggedIn ? (
              <li><Link to="/login" className="nav-link username">Sign-in</Link></li>
            ) : (
              <li className="dropdown" ref={dropdownRef}>
                <span onClick={toggleDropdown} className="username">{username}</span>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <p>Score: {currentUser?.score}</p>
                    <button onClick={handleSignOut} className="dropdown-item">Sign Out</button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>
        <div className="course-container">
            <div className='open'>
                <div class="sloj"></div>
                <div class="sloj"></div>
                <div class="sloj"></div>
            </div>
            
            <div className="sidebar">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#section1">Core Concept</a></li>
                    <li><a href="#section2">Steps in DFS:</a></li>
                    <li><a href="#section3">Pseudocode for DFS</a></li>
                    <li><a href="#section4">Properties of DFS</a></li>
                    <li><a href="#section5">Useful Applications of DFS</a></li>
                    <li><a href="#section6">C++ Implementation</a></li>
                    <li><a href='#comments-section'>Comments section</a></li>
                </ul>
            </div>


            <div className="course-content">
                <h1>DFS Graph Traversal</h1>

                <div id="section1">
                    <h2>Core Concept</h2>
                    <p>DFS uses recursion or a stack to traverse nodes deeply in the graph.</p>
                </div>

                <div id="section2">
                    <h2>Steps in DFS:</h2>
                    <p> 1. Start from an initial node. </p>
                    <p> 2. Explore all its unvisited neighbors. </p>
                    <p> 3. Continue the process until all nodes in the component of that starting node are visited. </p>
                    <p> DFS can be applied to both directed and undirected graphs. </p>
                </div>

                <div id="section3">
                    <h2>Pseudocode for DFS</h2>
                    <p> DFS(u): </p>
                    <p>     Mark node u as visited </p>
                    <p>     For each neighbor v of node u: </p>
                    <p>         If v is not visited: </p>
                    <p>             DFS(v) </p>
                </div>

                <div id="section4">
                    <h2>Properties of DFS</h2>
                    <p> - Time Complexity: O(N + M), where N is the number of nodes and M is the number of edges. </p>
                    <p> - Space Complexity: O(N + M) or O(N^2) depending on how the graph is stored. </p>
                </div>

                <div id="section5">
                    <h2>Useful Applications of DFS</h2>
                    <p> - Checking for the existence of a path between two nodes. </p>
                    <p> - Finding connected components. </p>
                    <p> - Topological sorting. </p>
                    <p> - Detecting cycles in a graph. </p>
                    <p> - Generating a spanning tree with a large height. </p>
                    <p> - Finding strongly connected components (SCC) in directed graphs. </p>
                </div>

                <div id="section6">
                    <h2>C++ Implementation:</h2>
                    <p>...</p>
                </div>

                <div id="comments-section" className="comments-section">
                    <h2>Comments</h2>

                    <div className="comments-list">
                        {messages.map((msg) => (
                            <div key={msg.id} className="comment">
                                <strong>{msg.displayName}: </strong>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className='comment-send'>
                        {userLoggedIn ? (
                            <>
                                <form onSubmit={sendMessage}>
                                    <input
                                        value={formValue}
                                        onChange={(e) => setFormValue(e.target.value)}
                                        placeholder="Write your comment here..."
                                    />
                                    <button type="submit">Send</button>
                                </form>
                            </>
                        ) : (
                            <p>
                                Morate biti ulogovani
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default DFS;