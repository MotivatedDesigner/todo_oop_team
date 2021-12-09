class {
    displayProjects = (projects) => {
        let html = projects.map(project => `<li id="project-${project.id}">${project.title}</li>`).join(' ')
        document.getElementById('project-list').innerHTML = html
    }
}

[{
        id: "fdf",
        title: "qsqsq",
        des: "fdf",
    },
    {
        id: "sssss",
        title: "sss",
        des: "sss",
    }
]

[
    '<li id="project-fdf">qsqs</li>',
    '<li id="project-ssssss">sss</li>'
]

'<li id="project-fdf">qsqs</li> <li id="project-ssssss">sss</li>'