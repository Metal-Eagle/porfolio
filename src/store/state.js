const state = {
    state() {
        return {
            name: "Jeroen",
            aboutSubtitle: "I am a junior developer always looking for new things to learn",
            contactTitle: "Let's work together...",
            contactText: "How do you take your coffee?",
            githubWebsite: "https://github.com/Metal-Eagle",
            linkedInWebsite: "https://www.linkedin.com/in/jeroen-hof-98725111b/",
            projects: [{
                    id: 1,
                    name: "Phone App For Speedbooks",
                    website: null,
                    smallDescription: "The telephone application is used with the Speedbooks Software, to see who is calling, in addition there is a function to send standard emails to customers",
                    image: "PhoneApp.png",
                    description: `404 extra information not yet found`
                },
                {
                    id: 2,
                    name: "Game Collector",
                    website: null,
                    smallDescription: "This application was created for my hobby to keep track of what is in my game collection.",
                    image: "GameCollector.png",
                    description: `404 extra information not yet found`
                },
                {
                    id: 3,
                    name: "Protofolio website",
                    website: "https://github.com/Metal-Eagle/portfolio",
                    smallDescription: "the website you are on at the moment is also made by me, and yes it is a pun",
                    image: "protofolio.png",
                    description: `404 extra information not yet found`
                }
            ],
        }
    }
}

export default state.state