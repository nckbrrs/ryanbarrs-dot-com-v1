import AboutMeIcon from '../assets/icons/AboutMeIcon';
import EmailIcon from '../assets/icons/Email';
import LinkedinIcon from '../assets/icons/Linkedin';
import PublicationsIcon from '../assets/icons/Publications';
import SciComIcon from '../assets/icons/SciCom';

export const contentConfig = {
    home: {
        headerText: "Hi, I'm Ryan.",
        mainText: "I am fixing broken hearts with bioengineering.",
        mainText2: "Let's work together.",
        socialLinks: [
            { 
                "name": "about",
                "text": "About Me",
                "href": "/about",
                "icon": <AboutMeIcon/>
            },
            {
                "name": "linkedin",
                "text": "LinkedIn",
                "href": "https://www.linkedin.com/in/ryanbarrs",
                "icon": <LinkedinIcon/>
            },
            {
                "name": "pubs",
                "text": "Publications",
                "href": "https://scholar.google.com/citations?user=5a-G8F4AAAAJ&hl=en",
                "icon": <PublicationsIcon/>
            },
            {
                "name": "sciCom",
                "text": "Science Communications",
                "href": "https://www.clippings.me/ryanbarrs",
                "icon": <SciComIcon/>
            },
            {
                "name": "email",
                "text": "Email",
                "href": "mailto:rwbarrs@g.clemson.edu",
                "icon": <EmailIcon/>
            }
        ]
    },
    about: {
        headerText: "Hi, I'm Ryan.",
        socialLinks: [
            { 
                "name": "about",
                "text": "About Me",
                "href": "/about",
                "icon": <AboutMeIcon/>
            },
            {
                "name": "linkedin",
                "text": "LinkedIn",
                "href": "https://www.linkedin.com/in/nckbrrs",
                "icon": <LinkedinIcon/>
            },
            {
                "name": "pubs",
                "text": "Publications",
                "href": "https://open.spotify.com/artist/2ZXVOSBi1E69IxiGuX8ofU?si=cSD9lEXoTRyGvoWBxbHGWA",
                "icon": <PublicationsIcon/>
            },
            {
                "name": "sciCom",
                "text": "Science Communication",
                "href": "https://soundcloud.com/nckbrrs",
                "icon": <SciComIcon/>
            },
            {
                "name": "email",
                "text": "Email",
                "href": "mailto:nckbrrs@gmail.com?subject=Your Subject Here&body=What's up?",
                "icon": <EmailIcon/>
            }
        ]
    }
}