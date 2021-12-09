class Storage {
    constructor() {
        this.key = "projects"
    }
    setProjects(projects) {
        localStorage.setItem(this.key, JSON.stringify(projects));
    }
    getProjects() {
        return JSON.parse(localStorage.getItem(this.key));
    }
}