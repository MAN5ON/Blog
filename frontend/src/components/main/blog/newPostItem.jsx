import React, {useState, useRef} from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "../../axios";

import {TemplateButton} from "../../templates/button";
import {selectIsAuth} from "../../redux/authSlice";

import s from "../../styles/blog/newPost.module.scss";

export const NewPostItem = () => {
    const [post, setPost] = useState({
        title: "",
        introText: "",
        introIMG: "",
        postArr: [
            {
                itemType: "text",
                itemContent: "",
            },
        ],
    });

    const inputFileRef = useRef(null);
    const isAuth = useSelector(selectIsAuth);

    const {
        formState: {isValid},
    } = useForm({mode: "onChange"});

    if (!isAuth) {
        return <Navigate to="/log-in"/>;
    }

    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append("image", file);
            const {data} = await axios.post("/upload", formData);
            console.log(data);
        } catch (error) {
            console.log(error);
            alert("Error: Can't upload file.");
        }
    };

    const handlePostArrChangeText = (index, event) => {
        let data = {...post};
        data.postArr[index].itemContent = event.target.value;
        setPost(data);
    };

    const AddTextHendler = () => {
        let data = {...post};
        let newItem = {itemType: "text", itemContent: ""};
        data.postArr.push(newItem);
        setPost(data);
    };
    const AddPicHendler = () => {
        let data = {...post};
        let newItem = {itemType: "image", itemContent: ""};
        data.postArr.push(newItem);
        setPost(data);
    };

    const RemoveHendler = (index) => {
        let data = {...post};
        data.postArr.splice(index, 1);
        setPost(data);
    };

    console.log(post);
    return (
        <main className={s.newPost}>
            <input
                name="title"
                placeholder="Title"
                value={post.title}
                onChange={(event) =>
                    setPost({...post, title: event.target.value})
                }
            />
            <textarea
                placeholder="Write a preview for your post"
                value={post.introText}
                onChange={(event) =>
                    setPost({...post, introText: event.target.value})
                }
            />
            <TemplateButton
                text="Choose your intro picture"
                click={() => inputFileRef.current.click()}
            />
            <input
                type="file"
                ref={inputFileRef}
                placeholder="Choose your intro picture"
                value={post.introIMG}
                onChange={handleChangeFile}
                hidden
            />
            {post.postArr.map((item, index) => {
                return (
                    <article className={s.postContent}>
                        {item.itemType === "text" ? (
                            <article key={index} id={index} className={s.text}>
                                <TemplateButton
                                    text="✖"
                                    click={() => RemoveHendler(index)}
                                />
                                <textarea
                                    placeholder="Tell us something interesting..."
                                    value={item.itemContent}
                                    onChange={(event) =>
                                        handlePostArrChangeText(index, event)
                                    }
                                />
                            </article>
                        ) : item.itemType === "image" ? (
                            <article key={index} className={s.image}>
                                <input
                                    type="file"
                                    placeholder="Choose your picture"
                                    value={item.itemContent}
                                />
                                <TemplateButton
                                    text="✖"
                                    click={() => RemoveHendler(index)}
                                />
                            </article>
                        ) : null}
                    </article>
                );
            })}
            {post.postArr.length < 20 ? (
                <article className={s.addButtons}>
                    <TemplateButton text="Add Text" click={AddTextHendler}/>
                    <TemplateButton text="Add Picture" click={AddPicHendler}/>
                </article>
            ) : (
                <footer className={s.helper}>
                    maximum number of content blocks is 20
                </footer>
            )}
            <article className={s.publish}>
                {post.postArr.length > 0 ? (
                    <TemplateButton text="PUBLISH" disabled={!isValid}/>
                ) : (
                    <footer className={s.helper}>
                        minimum number of content block is 1
                    </footer>
                )}
            </article>
        </main>
    );
};
