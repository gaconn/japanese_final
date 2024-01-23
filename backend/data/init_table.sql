CREATE TABLE vn (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vietnamese VARCHAR(255),
    sino_vietnamese VARCHAR(255)
);

CREATE TABLE jp (
    id INT PRIMARY KEY AUTO_INCREMENT,
    word_kanji VARCHAR(255),
    word_hiragana VARCHAR(255),
    word_katakana VARCHAR(255),
    spelling VARCHAR(255) NOT NULL,
);

CREATE TABLE vn_jp_translation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vn_word_id INT,
    jp_word_id INT,
    detail VARCHAR(255),
    FOREIGN KEY (vn_word_id) REFERENCES vn(id),
    FOREIGN KEY (jp_word_id) REFERENCES jp(id)
);

CREATE TABLE vocabulary_example (
    id INT PRIMARY KEY AUTO_INCREMENT,
    translation_id INT,
    example_sentence_jp VARCHAR(255),
    example_sentence_vn VARCHAR(255),
    FOREIGN KEY (translation_id) REFERENCES vn_jp_translation(id)
);

CREATE TABLE grammar (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sentence_structure VARCHAR(255),
    meaning VARCHAR(255)
);

CREATE TABLE grammar_example (
    id INT PRIMARY KEY AUTO_INCREMENT,
    grammar_id INT,
    example_sentence VARCHAR(255),
    vietnamese VARCHAR(255),
    FOREIGN KEY (grammar_id) REFERENCES grammar(id)
);

-- CREATE TABLE grammar_exercise (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     grammar_id INT,
--     exercise_question VARCHAR(255),
--     option1 VARCHAR(255),
--     option2 VARCHAR(255),
--     option3 VARCHAR(255),
--     option4 VARCHAR(255),
--     correct_option INT,
--     FOREIGN KEY (grammar_id) REFERENCES grammar(id)
-- );

CREATE TABLE lesson (
    id INT AUTO_INCREMENT,
    lesson_name_jp VARCHAR(255),
    lesson_name_vn VARCHAR(255),
    created_date DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE lesson_vocabulary (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lesson_id INT,
    translation_id INT,
    learning_time DATETIME,
    type_word INT,
    created_date DATETIME,
    updated_date DATETIME,
    FOREIGN KEY (lesson_id) REFERENCES lesson(id),
    FOREIGN KEY (translation_id) REFERENCES vn_jp_translation(id)
);

CREATE TABLE lesson_grammar (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lesson_id INT,
    grammar_id INT,
    grammar_example_id INT,
    learning_time DATETIME,
    FOREIGN KEY (lesson_id) REFERENCES lesson(id),
    FOREIGN KEY (grammar_id) REFERENCES grammar(id)
);

-- CREATE TABLE lesson_test (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     lesson_id INT,
--     test_question VARCHAR(255),
--     correct_answer VARCHAR(255),
--     FOREIGN KEY (lesson_id) REFERENCES lesson(id)
-- );

-- CREATE TABLE lesson_exercise (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     lesson_id INT,
--     exercise_question VARCHAR(255),
--     FOREIGN KEY (lesson_id) REFERENCES lesson(id)
-- );

-- CREATE TABLE user (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     username VARCHAR(255),
--     password VARCHAR(255),
--     full_name VARCHAR(255),
--     email VARCHAR(255),
--     created_date DATETIME,
--     updated_date DATETIME,
--     deleted_date DATETIME
-- );

-- CREATE TABLE lesson_progress (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT,
--     lesson_id INT,
--     completed_percent INT,
--     score INT,
--     learned_date DATETIME,
--     completed_date DATETIME,
--     FOREIGN KEY (user_id) REFERENCES user(id),
--     FOREIGN KEY (lesson_id) REFERENCES lesson(id)
-- );

-- CREATE TABLE lesson_feedback (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT,
--     lesson_id INT,
--     feedback_content VARCHAR(255),
--     timestamp TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES user(id),
--     FOREIGN KEY (lesson_id) REFERENCES lesson(id)
-- );