const baseURL = "https://ulumasuip.github.io/wdd230/";
const linksURL = "https://ulumasuip.github.io/wdd230/";

const activities = document.querySelector('#activities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    activities.innerHTML = "";
    
    weeks.forEach(week => {
        let item = document.createElement('li');
        item.innerHTML = `${week.week}: `;

        week.links.forEach(activity => {
            let title = activity.title;
            let link = activity.url.startsWith("week") ? baseURL + activity.url : activity.url;
            
            let linkItem = document.createElement('a');
            linkItem.setAttribute('href', link);
            linkItem.innerHTML = `${title}`;

            if (item.innerHTML !== `${week.week}: `) {
                item.innerHTML += " | ";
            }

            item.appendChild(linkItem);
        });

        activities.appendChild(item);
    });
}

