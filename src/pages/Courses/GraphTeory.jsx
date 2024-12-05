import { collection, query, orderBy, addDoc, onSnapshot, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useAuth } from '../../contexts/authContext';
import './GraphTeory.css';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const GraphTeory = () => {
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
    const messagesRef = collection(db, "messages", "graphtheory", "messagesGraph");
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

    const messagesRef = collection(db, "messages", "graphtheory", "messagesGraph");
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
            <li><a href="#section1">Graph Theory (definition)</a></li>
            <li><a href="#section2">Key Terms and Definitions:</a></li>
            <li><a href='#comments-section'>Comments section</a></li>
          </ul>
        </div>


        <div className="course-content">
          <h1>Graph Theory</h1>

          <div id="section1">
            <h2>Graph Theory (definition)</h2>
            <p>A graph is a structure consisting of vertices (nodes) and edges that connect them. It is a practical way to represent sets of elements and their mutual dependencies or connections.</p>
            <p> </p>
            <p>Edges in graphs can be either directed or undirected (bidirectional), and they may also have weights, regardless of direction.</p>
            <p> </p>
            <p>- A directed edge (uv) means you can travel from vertex u to vertex v.</p>
            <p>- An undirected edge (u) means you can travel between u and v in both directions.</p>
            <p>- A weighted edge (uv, w) means traveling from u to v has a specific cost or weight w.</p>
          </div>

          <div id="section2">
            <h2>Key Terms and Definitions:</h2>
            <p> </p>
            <p>- Degree of a vertex: The number of edges that connect to or from a vertex.</p>
            <p>- Traversal: Moving through vertices via the edges that connect them.</p>
            <p>- Walk: A traversal where vertices and edges may repeat.</p>
            <p>- Trail: A walk where edges may not repeat.</p>
            <p>- Path: A trail where vertices may not repeat.</p>
            <p>- Cycle: A "path" that starts and ends at the same vertex.</p>
            <p>- A graph is cyclic if it contains cycles, and acyclic otherwise.</p>
            <p>- Connected component: A part of an undirected graph where there is a path between any two vertices.</p>
            <p>- Strongly connected component (SCC): A part of a directed graph where there is a path between any two vertices.</p>
            <p>- A graph is connected if it has exactly one connected component.</p>
            <p>- Tree: A connected graph with N vertices and N - 1 edges. </p>
            <p>- In a tree, there is exactly one path between any two vertices.</p>
            <p>- DAG (Directed Acyclic Graph): A directed graph with no cycles.</p>
            <p>- Spanning tree (ST): A tree that contains all N vertices of a connected graph, using exactly N - 1 edges.</p>
            <p>- Minimum Spanning Tree (MST): A spanning tree of a weighted graph with the minimum total weight of edges.</p>
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
                  <Link to="/login" className="nav-link username"><button type="submit">Log-in to send messages</button></Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphTeory;