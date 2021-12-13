export default class StorageManager {
    constructor() {
        this.key = "projects"
    }
    setProjects(projects) {
        localStorage.setItem(this.key, JSON.stringify(projects));
    }
    getProjects = () => {
        let projects = localStorage.getItem(this.key)
        if(projects == null) {
            this.setProjects([])
            return []
        }
        else return JSON.parse(projects)
    }
}