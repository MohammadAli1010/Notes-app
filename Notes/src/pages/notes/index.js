import React from "react";
import Greeting from "../../components/atoms/greeting";
import Wrapper from "../../components/hoc/wrapper";

import Note from "../../components/cards/note";

import notesData from "../../data/notes.json";

import styles from "./notes.module.scss";

function Notes() {
    return (
        <section className={styles.container}>
            <Greeting/>
            <main>
                {notesData.map((note, i)=> <Note key={note.id} text={note.text} color={note.color} date={note.createdAt}/>)}
            </main>
        </section>
    );
}

export default Wrapper(Notes);