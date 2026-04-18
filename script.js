/// real-time search bar

let users = [
    {
        name: "aarav sharma",
        pic: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "lost in code, found in logic 💻✨ | building my own reality",
    },
    {
        name: "maya singh",
        pic: "https://images.unsplash.com/photo-1609685080522-9636e6ab42d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "soft heart, sharp mind 🌙 | peace over everything",
    },
    {
        name: "rhea kapoor",
        pic: "https://images.unsplash.com/photo-1600357524338-0aa536556606?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "aesthetic chaos 🎧🖤 | midnight thoughts & coffee",
    },
    {
        name: "dev malhotra",
        pic: "https://plus.unsplash.com/premium_photo-1723485742531-6fdf397663bd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveXMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "grinding silently ⚡ | success is the only noise",
    },
    {
        name: "kabira joshi",
        pic: "https://images.unsplash.com/photo-1553860214-87b92d6c1e22?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "dream big, stay kind 🌸 | living one vibe at a time",
    },
    {
        name: "kabir khan",
        pic: "https://images.unsplash.com/photo-1665251117419-31b511ce2be3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95cyUyMGltYWdlfGVufDB8fDB8fHwwL",
        bio: "old soul in a modern mess 🕰️ | observer, not a player",
    },
    {
        name: "ananya roy",
        pic: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        bio: "sunsets & self-growth 🌅 | healing, slowly but surely",
    },
    {
        name: "vihaan gupta",
        pic: "https://media.istockphoto.com/id/1325164545/photo/portrait-of-mature-business-men-wearing-suit-standing-against-gray-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=pOJnS3atclZ1tbxNHe48fMBPp3_4XBqEZ-ryIhUyOcQ=",
        bio: "no shortcuts, just discipline 🧠🔥 | future in progress",
    }
];


// sabai users show garne

function showUsers(arr) {
    arr.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // Blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url('${user.pic}')`;  // ✅ Fixed - use backgroundImage
        blurredLayer.classList.add("blurred-layer");

        // Content
        const content = document.createElement("div");
        content.classList.add("content");

        // Heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;  // ✅ Fixed - changed User to user

        // Paragraph
        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        // Append content
        content.appendChild(heading);
        content.appendChild(paragraph);

        // Append all to card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Append card to body (or any container)

        document.querySelector(".cards").appendChild(card);
    })
}
showUsers(users);


// Filter users by name

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });

    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});