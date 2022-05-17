export class Project {

    public name;
    public img;
    public description;
    public link;
    public css_class;
    public language;
    constructor(name,description,img,link,css_class,language) {
        this.name = name;
        this.description = description;
        this.img = img;
        this.link = link;
        this.css_class = css_class;
        this.language = language
    }
}