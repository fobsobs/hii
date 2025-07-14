// ============================================
// h
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "renn !!!!",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "happy 3 month anniverssary <3 !!!!",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['😻', '💗', '💌'],  // Heart emojis
        bears: ['🌹', '💐']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "do you know what day it is today..",                                    // First interaction
            yesBtn: "no",                                             // Text for "Yes" button
            noBtn: "i forgot",                                               // Text for "No" button
            secretAnswer: "YES I DO!!!!!!!!!!!!!!!!!!!!"           // Secret hover message
        },
        second: {
            text: "YAY!! um um do you still like me ☹️",                          // For the love meter
            startText: "TTHIS MUCHhh",                                   // Text before the percentage
            nextBtn: "continue :3"                                         // Text for the next button
        },
        third: {
            text: "are you glad we're together 🥹", // The big question!
            yesBtn: "yes!!!!",                                             // Text for "Yes" button
            noBtn: "no ri die"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "OMG??!! you must really like me ahhhahah..🥹💗",  // Shows when they go past 5000%
        high: "AWWWWW YIPPIIII YIPPI 😽",              // Shows when they go past 1000%
        normal: "YAY!!! 😁"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YAAAYYYY I KNEW YOUD SAY YES!!",
        message: "gkekekek happy 3 months my love :) i love everything about you my glorious, elegant, intelligent, charming, kind, thoughtful, strong, courageous, creative, brilliant, gentle, humble, generous, passionate, wise, funny, loyal, dependable, graceful, radiant, calm, confident, warm, compassionate, witty, adventurous, respectful, sincere, magnetic, bold, articulate, empathetic, inspiring, honest, patient, powerful, attentive, uplifting, classy, friendly, reliable, ambitious, intuitive, talented, supportive, grounded, determined, charismatic, extraordinary, trustworthy, noble, dignified, perceptive, innovative, refined, considerate, balanced, open-minded, composed, imaginative, mindful, optimistic, virtuous, noble-hearted, well-spoken, quick-witted, deep, philosophical, fearless, affectionate, expressive, emotionally intelligent, resourceful, delightful, fascinating, sharp, selfless, driven, assertive, authentic, vibrant, playful, observant, skillful, generous-spirited, practical, comforting, brave, wise-hearted, enthusiastic, dependable, tactful, enduring, discreet, well-mannered, composed, mature, tasteful, joyful, understanding, genuine, brilliant-minded, encouraging, well-rounded, magnetic, dynamic, radiant, radiant-spirited, soulful, radiant-hearted, insightful, creative-souled, justice-minded, reliable-hearted, tender, uplifting-minded, persevering, devoted, angelic, down-to-earth, golden-hearted, gentle-spirited, clever, courageous-hearted, courteous, harmonious, loyal-minded, beautiful-souled, easygoing, sincere-hearted, respectful-minded, comforting-voiced, confident-minded, emotionally strong, respectful-souled, imaginative-hearted, protective, noble-minded, confident-souled, wise-eyed, loving, serene, magnetic-souled, expressive-eyed, brilliant-hearted, inspiring-minded, and absolutely unforgettable boyfriend!!!",
        emojis: "💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FE7295",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#8b0000",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#B23A48",     // Button color (should stand out against the background)
        buttonHover: "#FFA5AB",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#901B22"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "19s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "60px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dshd8iv5i/raw/upload/v1752450491/6dBUzqjtbnIa1TwYbyw5CM_yhdakk", // Music streaming URL
        startText: "theres no music sorry idk how to put that in.",        // Button text to start music
        stopText: ":(( ",         // Button text to stop music
        volume: 0.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
