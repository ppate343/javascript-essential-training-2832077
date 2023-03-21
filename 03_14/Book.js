

class Book {
    constructor(
        name,
        publishedDate,
        cover,
        color,
        genre,


    ) {
        this.name = name;
        this.publishedDate = publishedDate;
        this.cover = cover;
        this.color = color;
        this.genre = genre;

    }
    calculateDaysAlive() {
        let today = new Date();
        let published = new Date(this.publishedDate);
        let elapsed = today - published;
        let daysSincePublished = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSincePublished;

    }
}

export default Book; 