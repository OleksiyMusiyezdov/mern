module.exports = function createNoteValidation(note) {

    let title = note.title;
    let content = note.content;
    let response = {
        status: true,
        message: "",
    };

    if (!title) {
        response = {
            status: false,
            message: "Title can not be empty",
        };
    } else if (!content) {
        response = {
            status: false,
            message: "Content can not be empty",
        };
    }

    return response;
}