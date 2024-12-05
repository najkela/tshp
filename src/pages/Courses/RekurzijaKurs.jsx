import { collection, query, orderBy, addDoc, onSnapshot, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useAuth } from '../../contexts/authContext';
import './RekurzijaKurs.css';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const RekurzijaKurs = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
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

    const images = [
        "/src/pages/Courses/slikeRekurzija/Recursive-approach1.png",
        "/src/pages/Courses/slikeRekurzija/Recursive-approach2.png",
        "/src/pages/Courses/slikeRekurzija/Recursive-approach3.png",
        "/src/pages/Courses/slikeRekurzija/Recursive-approach4.png"
    ]

    const texts = [
        "Checking if X is equivalent to 1. This is the termination condition for this recursion. ",
        "Checking the parity of X. If the expression `X & 1` (where `&` is the bitwise AND operator in C++) returns 1, then X is an odd number. In this case, we multiply X by three and add one. If it returns 0, we proceed to the `else` branch.",
        "In the `else` branch, we divide X by two using the fast `>>` operator for right bitwise shifting. ",
        "We continue the recursion by calling the function `Recursion()` again, passing X with its updated value as a parameter."

    ]

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

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
                        <li><a href="#section1">Recursion in Competitive Programming</a></li>
                        <li><a href="#section2">Basic Concept</a></li>
                        <li><a href="#section3">Every recursive function must have a...</a></li>
                        <li><a href="#section4">How Does the Computer Execute Recursion?</a></li>
                        <li><a href="#section5">Problems with Recursion</a></li>
                        <li><a href="#section6">Applications of Recursion</a></li>
                        <li><a href="#section7">Examples</a></li>
                        <li><a href='#comments-section'>Comments section</a></li>
                    </ul>
                </div>


                <div className="course-content">
                    <h1>Recursion Course</h1>

                    <div id="section1">
                        <h2>Recursion in Competitive Programming</h2>
                        <p>
                            Recursion is a programming technique where a function calls itself to solve a problem by breaking it into smaller, similar subproblems. This technique is crucial for solving tasks that naturally follow a hierarchical structure, such as graphs, trees, and combinatorial tasks where examples are small enough to allow exhaustive exploration of all combinations.
                        </p>
                    </div>

                    <div id="section2">
                        <h2>Basic Concept</h2>
                        <p>
                            The definition: Recursion is a function that calls itself, either directly or indirectly.
                        </p>
                    </div>

                    <div id="section3">
                        <h2>Every recursive function must have a...</h2>
                        <p>1. Base Case: A condition where recursion stops, marking the termination of the recursion.</p>
                        <p>2. Recursive Step: A function call that addresses a "smaller" or "simpler" problem.</p>
                    </div>

                    <div id="section4">
                        <h2>How Does the Computer Execute Recursion?</h2>
                        <p>- When a function calls itself, each new call is added to the call stack, where the values of all local variables are stored.</p>
                        <p>- The function "returns backward" when it encounters the base case or finishes its task.</p>
                        <p>- Recursive searches and functions can intuitively be visualized as trees.</p>
                    </div>

                    <div id="section5">
                        <h2>Problems with Recursion</h2>
                        <p>- Recursive calls consume memory on the stack, which can lead to stack overflow.</p>
                        <p>- In some cases, recursion can be too slow, especially compared to iterative solutions.</p>
                        <p>- A good example of slow recursion is determining an element in the Fibonacci sequence. Recursive calculation for N involves summing the recursive results of its two predecessors (N−1 and N−2), causing repeated calculations for the same values.</p>
                    </div>

                    <div id="section6">
                        <h2>Applications of Recursion</h2>
                        <p>Recursion is used to solve many problems, including:</p>
                        <p> </p>
                        <p>Graphs and Trees:</p>
                        <p>- Depth-First Search (DFS) uses recursion to traverse nodes.</p>
                        <p>- Counting connected components or finding the deepest node in a tree.</p>
                        <p>Combinatorics:</p>
                        <p>- Generating all subsets of a set.</p>
                        <p>- Finding permutations or combinations of elements.</p>
                        <p>Dynamic Programming (DP):</p>
                        <p>- Many DP problems can be solved using recursion with memoization for optimization. </p>
                    </div>

                    <div id="section7">
                        <h2>Examples</h2>
                        <p>Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. </p>
                        <p>For example, the sequence for n=3 is as follows:</p>
                        <p>3 → 10 → 5 → 16 → 8 → 4 → 2 → 1</p>
                        <p>Your task is to simulate the execution of the algorithm for a given value of n.</p>
                        <p></p>
                        <div className="examples-container">
                            <div className="left-section">
                                <p>{texts[currentIndex]}</p>
                            </div>
                            <div className="right-section">
                                <img src={images[currentIndex]} alt={`Example ${currentIndex + 1}`} />
                                <div className="buttons">
                                    <button onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
                                    <button onClick={handleNext} disabled={currentIndex === images.length - 1}>Next</button>
                                </div>
                            </div>
                        </div>
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

export default RekurzijaKurs;