module.exports = {
    //To format the data of posts/comments.
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },format_plural: (word, amount) => { //To transform words to plural if needed.
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    }
};