import React, { useId } from 'react';
import { useEffect, useState } from 'react';
import { collection, query, orderBy, addDoc, onSnapshot, serverTimestamp, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useAuth } from '../../contexts/authContext';
import './RekurzijaKurs.css';

const RekurzijaKurs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { currentUser, userLoggedIn } = useAuth();
    const [messages, setMessages] = useState([]);
    const [formValue, setFormValue] = useState("");

    const images = [
        "src/pages/Courses/slikeRekurzija/Recursive-approach1.png",
        "/slikeRekurzija/Recursive-approach2.png",
        "/slikeRekurzija/Recursive-approach3.png",
        "/slikeRekurzija/Recursive-approach4.png"
    ]

    const texts = [
        "1 lorem ipsum dolor sit amet non",
        "2 lorem ipsum dolor sit amet non",
        "3 lorem ipsum dolor sit amet non",
        "4 lorem ipsum dolor sit amet non"

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
        <div className="course-container">
            <div className='open'>
                <div class="sloj"></div>
                <div class="sloj"></div>
                <div class="sloj"></div>
            </div>

            <div className="sidebar">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#section1">Introduction</a></li>
                    <li><a href="#section2">What is Recursion?</a></li>
                    <li><a href="#section3">Base Case and Recursive Case</a></li>
                    <li><a href="#section4">Examples</a></li>
                    <li><a href='#comments-section'>Comments section</a></li>
                </ul>
            </div>


            <div className="course-content">
                <h1>Recursion Course</h1>

                <div id="section1">
                    <h2>Introduction</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, perspiciatis veritatis. Consectetur sit ipsum nulla, repellat, facere facilis dolor ex minima doloremque provident soluta voluptatum repudiandae odio qui praesentium fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, autem. Beatae in rerum, non aperiam architecto suscipit quam reiciendis quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque voluptatum sed sint soluta fuga officia ut delectus! Error dicta aspernatur ipsa mollitia corrupti, quas exercitationem sunt officia repellat similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium iusto cum. Facere nulla maiores deserunt illum assumenda, aliquam commodi minus, fugit cumque placeat similique, repellat eligendi quod! Officia, cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia necessitatibus cupiditate sunt illum perspiciatis expedita modi, praesentium reiciendis voluptates quo explicabo voluptatem fuga ipsa. Minima reiciendis facere eum illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorem debitis excepturi natus, iste voluptatibus illo ad cumque architecto quibusdam magnam nam consequuntur, quaerat unde reprehenderit necessitatibus impedit amet nihil! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim iste dolores illum velit, eaque laborum corporis! Sint, eveniet, aperiam excepturi nostrum veniam fugiat, explicabo quisquam cupiditate sequi natus aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, rerum laboriosam quibusdam rem, quod a, maiores culpa nam dignissimos iure laudantium eaque. Placeat ex voluptatibus aliquid omnis aperiam laboriosam error. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi minima repudiandae vero impedit quis molestiae dolor rerum voluptas! Necessitatibus nobis cupiditate animi laborum provident minus rerum mollitia ab fugit quisquam. hic cum, eveniet sapiente, nostrum a laudantium aliquid ullam perspiciatis.</p>
                </div>

                <div id="section2">
                    <h2>What is Recursion?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, perspiciatis veritatis. Consectetur sit ipsum nulla, repellat, facere facilis dolor ex minima doloremque provident soluta voluptatum repudiandae odio qui praesentium fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, autem. Beatae in rerum, non aperiam architecto suscipit quam reiciendis quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque voluptatum sed sint soluta fuga officia ut delectus! Error dicta aspernatur ipsa mollitia corrupti, quas exercitationem sunt officia repellat similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium iusto cum. Facere nulla maiores deserunt illum assumenda, aliquam commodi minus, fugit cumque placeat similique, repellat eligendi quod! Officia, cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia necessitatibus cupiditate sunt illum perspiciatis expedita modi, praesentium reiciendis voluptates quo explicabo voluptatem fuga ipsa. Minima reiciendis facere eum illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorem debitis excepturi natus, iste voluptatibus illo ad cumque architecto quibusdam magnam nam consequuntur, quaerat unde reprehenderit necessitatibus impedit amet nihil! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim iste dolores illum velit, eaque laborum corporis! Sint, eveniet, aperiam excepturi nostrum veniam fugiat, explicabo quisquam cupiditate sequi natus aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, rerum laboriosam quibusdam rem, quod a, maiores culpa nam dignissimos iure laudantium eaque. Placeat ex voluptatibus aliquid omnis aperiam laboriosam error. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi minima repudiandae vero impedit quis molestiae dolor rerum voluptas! Necessitatibus nobis cupiditate animi laborum provident minus rerum mollitia ab fugit quisquam. hic cum, eveniet sapiente, nostrum a laudantium aliquid ullam perspiciatis.</p>
                </div>

                <div id="section3">
                    <h2>Base Case and Recursive Case</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, perspiciatis veritatis. Consectetur sit ipsum nulla, repellat, facere facilis dolor ex minima doloremque provident soluta voluptatum repudiandae odio qui praesentium fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, autem. Beatae in rerum, non aperiam architecto suscipit quam reiciendis quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque voluptatum sed sint soluta fuga officia ut delectus! Error dicta aspernatur ipsa mollitia corrupti, quas exercitationem sunt officia repellat similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium iusto cum. Facere nulla maiores deserunt illum assumenda, aliquam commodi minus, fugit cumque placeat similique, repellat eligendi quod! Officia, cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate mollitia necessitatibus cupiditate sunt illum perspiciatis expedita modi, praesentium reiciendis voluptates quo explicabo voluptatem fuga ipsa. Minima reiciendis facere eum illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorem debitis excepturi natus, iste voluptatibus illo ad cumque architecto quibusdam magnam nam consequuntur, quaerat unde reprehenderit necessitatibus impedit amet nihil! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim iste dolores illum velit, eaque laborum corporis! Sint, eveniet, aperiam excepturi nostrum veniam fugiat, explicabo quisquam cupiditate sequi natus aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, rerum laboriosam quibusdam rem, quod a, maiores culpa nam dignissimos iure laudantium eaque. Placeat ex voluptatibus aliquid omnis aperiam laboriosam error. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi minima repudiandae vero impedit quis molestiae dolor rerum voluptas! Necessitatibus nobis cupiditate animi laborum provident minus rerum mollitia ab fugit quisquam. hic cum, eveniet sapiente, nostrum a laudantium aliquid ullam perspiciatis.</p>
                </div>

                <div id="section4">
                    <h2>Examples</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, perspiciatis veritatis. Consectetur sit ipsum nulla, repellat, facere facilis dolor ex minima doloremque provident soluta voluptatum repudiandae odio qui praesentium fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, autem. Beatae in rerum, non aperiam architecto suscipit quam reiciendis quos Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque voluptatum sed sint soluta fuga officia ut delectus! Error dicta aspernatur ipsa mollitia corrupti, quas exercitationem sunt.</p>
                    <div className="examples-container">
                        <div className="left-section">
                            <p>{texts[currentIndex]}</p>
                        </div>
                        <div className="right-section">
                            <img src={images[currentIndex]} alt={`Example ${currentIndex + 1}`} />
                            <div className="image-container" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
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
                                Morate biti ulogovani
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RekurzijaKurs;