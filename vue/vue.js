/**
 * vue.js works in conjunction with skills.html where app component is called to
 * display different images and text when an image is hovered over
 */


// vue create app 
const { createApp } = Vue

// define variables as images
let pythonLogo = "./vue/assets/images/python-logo.jpg";
let pythonLogoBack = "./vue/assets/images/python-logo-back.jpg";
let javaLogo = "./vue/assets/images/java-logo.jpg";
let javaLogoBack = "./vue/assets/images/java-logo-back.jpg";
let multiLogo = "./vue/assets/images/multi-logo.jpg";
let multiLogoBack = "./vue/assets/images/multi-logo-back.jpg";

// create array of logos
const logos = [pythonLogo,pythonLogoBack,multiLogo,multiLogoBack,javaLogo,
    javaLogoBack]


// createApp return data and methods
createApp({
    data() {
    return {
        // define data strings and logos array index
        backGroundColor: "transparent",
        pythonDescription: "PYTHON",
        javascriptDescription: "JAVASCRIPT, VUE, HTML, & CSS",
        javaDescription: "JAVA",
        logos,
        python: logos[0],
        javascript: logos[2],
        java: logos[4]
    }
},
methods: {
    // update method with id for logos index and string update
    updatePython(id){
        this.python = this.logos[id]
        this.pythonDescription = `Courses with Python Exposure: Introduction to 
        Software Development, Information Structures with Python, Data Science 
        with Python, and Articifical Intelligence --- Projects: NBA Data Science
         and DOW 30 Portfolio Builder`
    },
    // reset method with logo index and string update
    resetPython(){
        this.python = logos[0]
        this.pythonDescription = "PYTHON"
    },
    // update method with id for logos index and string update
    updateJavaScript(id){
        this.javascript = this.logos[id]
        this.javascriptDescription = `Courses with JavaScript Exposure: Web 
        Application Development --- Projects: This Website`
    },
    // reset method with logo index and string update
    resetJavaScript(){
        this.javascript = logos[2]
        this.javascriptDescription = "JAVASCRIPT, VUE, HTML, & CSS"
    },
    // update method with id for logos index and string update
    updateJava(id){
        this.java = this.logos[id]
        this.javaDescription = `Courses with Java Exposure: Data Structures and 
        Algorithms and Advanced Programming Techniques --- Projects: Memory
        Merge Find and Process Scheduler`
    },
    // reset method with logo index and string update
    resetJava(){
        this.java = logos[4]
        this.javaDescription = "JAVA"
    }
}
// mount app     
}).mount('#app')
