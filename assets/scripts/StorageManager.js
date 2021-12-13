export default class StorageManager {
    constructor() {
        this.key = "projects"
    }
    setProjects = (projects) => {
        localStorage.setItem("projects", JSON.stringify(projects))}

    getProjects = () => {
        let projects = localStorage.getItem("projects")
        if(projects == null)  return []
        else return JSON.parse(projects)
    }
}