module.exports = function createNoteValidation(note) {

    console.log("Validation is starting...");
    let title = note.title;
    let content = note.content;
    let response = {
        status: true,
        message: "Everything's OK!",
    };

    if (!title) {
        response = {
            status: false,
            message: "Title can not be empty",
        };
        console.log("Validation has finished 1");

    } else if (!content) {
        response = {
            status: false,
            message: "Content can not be empty",
        };
        console.log("Validation has finished 2");
    } else {
        console.log("Validation has finished successfully");
    }

    return response;
}