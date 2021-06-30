import TwitterIcon from '../assets/icons/Twitter';
import AppleMusicIcon from '../assets/icons/AppleMusic';
import EmailIcon from '../assets/icons/Email';
import InstagramIcon from '../assets/icons/Instagram';
import LinkedinIcon from '../assets/icons/Linkedin';
import SpotifyIcon from '../assets/icons/Spotify';
import SoundcloudIcon from '../assets/icons/Soundcloud';

export const contentConfig = {
    home: {
        headerText: "Hi, I'm Ryan.",
        mainText: "I am fixing broken hearts with bioengineering.",
        mainText2: "Let's work together.",
        socialLinks: [
            { 
                "name": "about",
                "text": "About Me",
                "href": "https://music.apple.com/us/artist/nick-barrs/1539845933",
                "icon": <AppleMusicIcon/>
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
                "icon": <SpotifyIcon/>
            },
            {
                "name": "sciCom",
                "text": "Science Communication",
                "href": "https://soundcloud.com/nckbrrs",
                "icon": <SoundcloudIcon/>
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