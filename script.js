/* =========================================================
   FUTBOL KARİYERİ
   TAM OYUN SİSTEMİ
========================================================= */
/* =========================================================
   TAKIMLAR
========================================================= */
const TEAMS = {
    "Trendyol Süper Lig": [
        "Galatasaray",
        "Fenerbahçe",
        "Beşiktaş",
        "Trabzonspor",
        "Başakşehir",
        "Kasımpaşa",
        "Samsunspor",
        "Göztepe",
        "Rizespor",
        "Konyaspor",
        "Gaziantep FK",
        "Alanyaspor",
        "Gençlerbirliği",
        "Eyüpspor",
        "Kocaelispor",
        "Antalyaspor",
        "Kayserispor",
        "Çaykur Rizespor"
    ],
    "Trendyol 1. Lig": [
        "Boluspor",
        "Bandırmaspor",
        "Manisa FK",
        "İstanbulspor",
        "Ümraniyespor",
        "Keçiörengücü",
        "Erokspor",
        "Sakaryaspor",
        "Pendikspor",
        "Iğdır FK",
        "Erzurumspor",
        "Amed SK",
        "Sivasspor",
        "Van Spor FK",
        "Serikspor",
        "Muşspor",
        "Bucaspor",
        "Çorum FK"
    ],
    "Premier League": [
        "Arsenal",
        "Aston Villa",
        "Bournemouth",
        "Brentford",
        "Brighton",
        "Burnley",
        "Chelsea",
        "Crystal Palace",
        "Everton",
        "Fulham",
        "Leeds United",
        "Liverpool",
        "Manchester City",
        "Manchester United",
        "Newcastle United",
        "Nottingham Forest",
        "Sunderland",
        "Tottenham",
        "West Ham United",
        "Wolverhampton"
    ],
    "Bundesliga": [
        "Bayern München",
        "Borussia Dortmund",
        "RB Leipzig",
        "Bayer Leverkusen",
        "Stuttgart",
        "Eintracht Frankfurt",
        "Freiburg",
        "Mainz",
        "Werder Bremen",
        "Gladbach",
        "Wolfsburg",
        "Hoffenheim",
        "Union Berlin",
        "Augsburg",
        "Heidenheim",
        "Hamburg",
        "Köln",
        "St. Pauli"
    ],
    "La Liga": [
        "Real Madrid",
        "Barcelona",
        "Atlético Madrid",
        "Athletic Club",
        "Villarreal",
        "Real Betis",
        "Sevilla",
        "Real Sociedad",
        "Valencia",
        "Getafe",
        "Osasuna",
        "Celta Vigo",
        "Rayo Vallecano",
        "Mallorca",
        "Girona",
        "Espanyol",
        "Alavés",
        "Levante",
        "Elche",
        "Oviedo"
    ],
    "Serie A": [
        "Inter",
        "Milan",
        "Juventus",
        "Napoli",
        "Roma",
        "Lazio",
        "Atalanta",
        "Fiorentina",
        "Bologna",
        "Torino",
        "Genoa",
        "Udinese",
        "Parma",
        "Como",
        "Cagliari",
        "Lecce",
        "Sassuolo",
        "Pisa",
        "Cremonese",
        "Verona"
    ],
    "Ligue 1": [
        "PSG",
        "Marseille",
        "Monaco",
        "Lyon",
        "Lille",
        "Nice",
        "Lens",
        "Rennes",
        "Strasbourg",
        "Nantes",
        "Toulouse",
        "Montpellier",
        "Brest",
        "Auxerre",
        "Saint-Étienne",
        "Le Havre",
        "Lorient",
        "Metz"
    ]
};
/* =========================================================
   TAKIM RENKLERİ
========================================================= */
const COLORS = {
    "Galatasaray": "#a90432",
    "Fenerbahçe": "#142c75",
    "Beşiktaş": "#111111",
    "Trabzonspor": "#70142b",
    "Başakşehir": "#f58220",
    "Kasımpaşa": "#1498d1",
    "Samsunspor": "#d71920",
    "Göztepe": "#e30613",
    "Arsenal": "#db0007",
    "Chelsea": "#034694",
    "Liverpool": "#c8102e",
    "Manchester City": "#6cabdd",
    "Manchester United": "#da291c",
    "Bayern München": "#dc052d",
    "Borussia Dortmund": "#fdeb00",
    "Real Madrid": "#ffffff",
    "Barcelona": "#a50044",
    "Inter": "#0068a8",
    "Milan": "#fb090b",
    "PSG": "#004170"
};
/* =========================================================
   OYUN DEĞİŞKENLERİ
========================================================= */
let player = null;
let game = null;
/* =========================================================
   YENİ OYUNCU
========================================================= */
function createPlayer() {
    const name =
        document.getElementById("regName")
            .value.trim();
    const age =
        Number(
            document.getElementById("regAge")
                .value
        );
    const height =
        Number(
            document.getElementById("regHeight")
                .value
        );
    const weight =
        Number(
            document.getElementById("regWeight")
                .value
        );
    const position =
        document.getElementById("regPosition")
            .value;
    if (!name) {
        alert(
            "Oyuncu adını yazmalısın."
        );
        return;
    }
    if (
        age < 16 ||
        age > 40
    ) {
        alert(
            "Yaş 16 ile 40 arasında olmalı."
        );
        return;
    }
    if (
        height < 150 ||
        height > 220
    ) {
        alert(
            "Boy 150-220 cm arasında olmalı."
        );
        return;
    }
    if (
        weight < 45 ||
        weight > 150
    ) {
        alert(
            "Kilo 45-150 kg arasında olmalı."
        );
        return;
    }
    player = {
        name,
        age,
        height,
        weight,
        position,
        team:
            "Başakşehir",
        league:
            "Trendyol Süper Lig",
        country:
            "Türkiye",
        rating:
            60,
        energy:
            100,
        fatigue:
            0,
        money:
            0,
        wage:
            500,
        fanTrust:
            60,
        coachTrust:
            60,
        reputation:
            50,
        injured:
            false,
        injuryName:
            "",
        injuryMatches:
            0,
        injurySeverity:
            0,
        careerMatches:
            0,
        careerStarts:
            0,
        goals:
            0,
        assists:
            0,
        yellow:
            0,
        red:
            0,
        minutes:
            0,
        seasonMatches:
            0,
        seasonStarts:
            0,
        seasonGoals:
            0,
        seasonAssists:
            0,
        seasonYellow:
            0,
        seasonRed:
            0,
        seasonMinutes:
            0,
        seasons:
            0,
        careerMode:
            "Futbolcu",
        firstTransfer:
            false,
        transferLock:
            0,
        interested:
            [],
        news:
            []
    };
    game = {
        season:
            2026,
        week:
            0,
        round:
            0,
        fixtures:
            {},
        tables:
            {},
        news:
            [],
        match:
            null,
        seasonFinished:
            false
    };
    generateLeague(
        player.league
    );
    createFixtures();
    addNews(
        `${name} profesyonel futbol kariyerine başladı.`,
        "KARİYER"
    );
    saveCareer();
    /*
       EN ÖNEMLİ KISIM:
       Kayıt sonrası doğrudan
       ANA SAYFA açılır.
    */
    openGame();
}
/* =========================================================
   KAYIT
========================================================= */
function saveCareer() {
    if (
        !player ||
        !game
    ) {
        return;
    }
    localStorage.setItem(
        "futbolKariyeriV2",
        JSON.stringify({
            player,
            game
        })
    );
}
/* =========================================================
   KAYIT YÜKLE
========================================================= */
function loadCareer() {
    const save =
        localStorage.getItem(
            "futbolKariyeriV2"
        );
    if (!save) {
        alert(
            "Kayıtlı kariyer bulunamadı."
        );
        return;
    }
    try {
        const data =
            JSON.parse(save);
        player =
            data.player;
        game =
            data.game;
        /*
           Eski kayıtlar için
           eksik değerleri tamamla.
        */
        migrateSave();
        openGame();
    }
    catch (error) {
        console.error(error);
        alert(
            "Kayıt yüklenemedi."
        );
    }
}
/* =========================================================
   ESKİ KAYITLARI UYUMLU HALE GETİR
========================================================= */
function migrateSave() {
    if (!player || !game)
        return;
    if (
        player.age === undefined
    ) {
        player.age = 18;
    }
    /*
       Doğum tarihi artık kullanılmıyor.
    */
    delete player.birth;
    const defaults = {
        rating: 60,
        energy: 100,
        fatigue: 0,
        money: 0,
        wage: 500,
        fanTrust: 60,
        coachTrust: 60,
        reputation: 50,
        injured: false,
        injuryName: "",
        injuryMatches: 0,
        injurySeverity: 0,
        careerMatches: 0,
        careerStarts: 0,
        goals: 0,
        assists: 0,
        yellow: 0,
        red: 0,
        minutes: 0,
        seasonMatches: 0,
        seasonStarts: 0,
        seasonGoals: 0,
        seasonAssists: 0,
        seasonYellow: 0,
        seasonRed: 0,
        seasonMinutes: 0,
        seasons: 0,
        careerMode: "Futbolcu",
        firstTransfer: false,
        transferLock: 0,
        interested: []
    };
    Object.keys(defaults)
        .forEach(key => {
            if (
                player[key] === undefined
            ) {
                player[key] =
                    defaults[key];
            }
        });
    if (!game.fixtures)
        game.fixtures = {};
    if (!game.tables)
        game.tables = {};
    if (!game.news)
        game.news = [];
    if (!game.season)
        game.season = 2026;
    if (
        game.week === undefined
    )
        game.week = 0;
    if (
        game.round === undefined
    )
        game.round = 0;
}
/* =========================================================
   UYGULAMAYI AÇ
========================================================= */
function openGame() {
    const registerPage =
        document.getElementById(
            "registerPage"
        );
    const gamePage =
        document.getElementById(
            "gamePage"
        );
    if (registerPage) {
        registerPage
            .classList
            .remove("active");
    }
    if (gamePage) {
        gamePage
            .classList
            .add("active");
    }
    /*
       BOŞ EKRAN SORUNUNUN ÇÖZÜMÜ
       Bütün ekranları kapatıyoruz.
       Ardından HOME ekranını açıyoruz.
    */
    document
        .querySelectorAll(
            "#gamePage .screen"
        )
        .forEach(screen => {
            screen
                .classList
                .add("hidden");
        });
    const home =
        document.getElementById(
            "home"
        );
    if (home) {
        home
            .classList
            .remove("hidden");
    }
    updateNav("home");
    renderEverything();
    saveCareer();
}
/* =========================================================
   SAYFA DEĞİŞTİR
========================================================= */
function showPage(name) {
    const screens =
        document.querySelectorAll(
            "#gamePage .screen"
        );
    screens.forEach(screen => {
        screen.classList.add(
            "hidden"
        );
    });
    const page =
        document.getElementById(
            name
        );
    if (!page) {
        console.error(
            "Sayfa bulunamadı:",
            name
        );
        return;
    }
    page.classList.remove(
        "hidden"
    );
    updateNav(name);
    if (name === "league")
        renderLeague();
    if (name === "fixture")
        renderFixtures();
    if (name === "match")
        renderMatch();
    if (name === "stats")
        renderStats();
    if (name === "transfer")
        renderTransfers();
    if (name === "hospital")
        renderHospital();
    if (name === "shop")
        renderShop();
    if (name === "property")
        renderProperty();
    if (name === "news")
        renderNews();
    if (name === "manager")
        renderManager();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
/* =========================================================
   ALT MENÜ
========================================================= */
function updateNav(name) {
    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(btn => {
            btn.classList.remove(
                "active"
            );
        });
    const map = {
        home: 0,
        match: 1,
        league: 2,
        transfer: 3
    };
    if (
        map[name] !== undefined
    ) {
        const buttons =
            document.querySelectorAll(
                ".nav-item"
            );
        if (buttons[map[name]]) {
            buttons[map[name]]
                .classList
                .add("active");
        }
    }
}
/* =========================================================
   DAHA FAZLA
========================================================= */
function showMoreMenu() {
    const menu =
        document.getElementById(
            "moreMenu"
        );
    if (menu) {
        menu.classList.remove(
            "hidden"
        );
    }
}
function hideMoreMenu() {
    const menu =
        document.getElementById(
            "moreMenu"
        );
    if (menu) {
        menu.classList.add(
            "hidden"
        );
    }
}
function openFromMore(name) {
    hideMoreMenu();
    showPage(name);
}
/* =========================================================
   HER ŞEYİ YENİLE
========================================================= */
function renderEverything() {
    if (!player || !game)
        return;
    setText(
        "playerName",
        player.name
    );
    setText(
        "playerTeam",
        `${player.team} • ${player.league}`
    );
    setText(
        "playerBasic",
        `${player.position} • ${player.age} yaş`
    );
    setText(
        "playerPhysical",
        `${player.height} cm • ${player.weight} kg`
    );
    setText(
        "rating",
        player.rating
    );
    setText(
        "energy",
        player.energy
    );
    setText(
        "fatigue",
        player.fatigue
    );
    setText(
        "fanTrust",
        player.fanTrust
    );
    setText(
        "coachTrust",
        player.coachTrust
    );
    setText(
        "reputation",
        player.reputation
    );
    setText(
        "money",
        money(player.money) + " €"
    );
    setText(
        "dateText",
        getDateText()
    );
    setText(
        "seasonText",
        `${game.season}/${String(game.season + 1).slice(-2)}`
    );
    setText(
        "careerSummary",
        `${game.season}/${game.season + 1} sezonu • ${player.team} • ${game.week}. hafta`
    );
    renderInjury();
    renderHomeNews();
}
/* =========================================================
   GÜVENLİ TEXT
========================================================= */
function setText(
    id,
    value
) {
    const el =
        document.getElementById(id);
    if (el) {
        el.textContent =
            value;
    }
}
/* =========================================================
   TARİH
========================================================= */
function getDateText() {
    if (!game)
        return "";
    const start =
        new Date(
            game.season,
            7,
            1
        );
    start.setDate(
        start.getDate() +
        game.week * 7
    );
    return start.toLocaleDateString(
        "tr-TR"
    );
}
/* =========================================================
   PARA
========================================================= */
function money(value) {
    return Math.round(
        Number(value) || 0
    ).toLocaleString(
        "tr-TR"
    );
}
/* =========================================================
   RENK
========================================================= */
function color(team) {
    if (COLORS[team])
        return COLORS[team];
    let hash = 0;
    for (
        let i = 0;
        i < team.length;
        i++
    ) {
        hash =
            team.charCodeAt(i) +
            ((hash << 5) - hash);
    }
    const colors = [
        "#e53935",
        "#1e88e5",
        "#43a047",
        "#8e24aa",
        "#fb8c00",
        "#00897b"
    ];
    return colors[
        Math.abs(hash) %
        colors.length
    ];
}
/* =========================================================
   LİG OLUŞTUR
========================================================= */
function generateLeague(
    league
) {
    if (
        !TEAMS[league]
    )
        return;
    if (
        game.tables[league]
    )
        return;
    game.tables[league] =
        TEAMS[league].map(
            (team, index) => ({
                team,
                color:
                    color(team),
                played: 0,
                wins: 0,
                draws: 0,
                losses: 0,
                gf: 0,
                ga: 0,
                points: 0,
                strength:
                    65 +
                    (index % 12)
            })
        );
}
/* =========================================================
   FİKSTÜR OLUŞTUR
========================================================= */
function createFixtures() {
    const teams =
        [...TEAMS[player.league]];
    const rounds = [];
    let list =
        [...teams];
    const n =
        list.length;
    for (
        let r = 0;
        r < n - 1;
        r++
    ) {
        const matches = [];
        for (
            let i = 0;
            i < n / 2;
            i++
        ) {
            matches.push({
                home:
                    list[i],
                away:
                    list[n - 1 - i],
                played:
                    false,
                hs:
                    null,
                as:
                    null
            });
        }
        rounds.push(
            matches
        );
        list = [
            list[0],
            list[n - 1],
            ...list.slice(
                1,
                n - 1
            )
        ];
    }
    const second =
        rounds.map(
            round =>
                round.map(
                    match => ({
                        home:
                            match.away,
                        away:
                            match.home,
                        played:
                            false,
                        hs:
                            null,
                        as:
                            null
                    })
                )
        );
    game.fixtures[
        player.league
    ] = [
        ...rounds,
        ...second
    ];
}
/* =========================================================
   SIRADAKİ MAÇ
========================================================= */
function getNextMatch() {
    const rounds =
        game.fixtures[
            player.league
        ];
    if (!rounds)
        return null;
    for (
        let r = game.round;
        r < rounds.length;
        r++
    ) {
        const found =
            rounds[r].find(
                match =>
                    (
                        match.home ===
                        player.team ||
                        match.away ===
                        player.team
                    ) &&
                    !match.played
            );
        if (found) {
            return {
                match:
                    found,
                round:
                    r
            };
        }
    }
    return null;
}
/* =========================================================
   MAÇ EKRANI
========================================================= */
function renderMatch() {
    const box =
        document.getElementById(
            "matchContent"
        );
    if (!box)
        return;
    if (player.injured) {
        box.innerHTML = `
            <div class="card">
                <h2>
                    🤕 Maça Çıkamazsın
                </h2>
                <p>
                    ${escapeHTML(player.injuryName)}
                </p>
                <p>
                    ${player.injuryMatches}
                    maç daha kaçıracaksın.
                </p>
                <button
                    class="btn"
                    onclick="restPlayer()"
                >
                    🛌 Dinlen
                </button>
                <button
                    class="btn"
                    onclick="simulateInjuredWeek()"
                >
                    ⏩ Haftayı Simüle Et
                </button>
            </div>
        `;
        return;
    }
    const next =
        getNextMatch();
    if (!next) {
        box.innerHTML = `
            <div class="card">
                <h2>
                    🏁 Sezon Tamamlandı
                </h2>
                <p class="muted">
                    Yeni sezon için hazır mısın?
                </p>
                <button
                    class="btn green"
                    onclick="newSeason()"
                >
                    Yeni Sezon
                </button>
            </div>
        `;
        return;
    }
    const m =
        next.match;
    box.innerHTML = `
        <div class="match-card">
            <div class="match-header">
                <div class="match-league">
                    ${escapeHTML(player.league)}
                </div>
                <div class="match-teams">
                    <div class="match-team">
                        <span
                            class="match-team-color"
                            style="
                                background:
                                ${color(m.home)}
                            "
                        ></span>
                        ${escapeHTML(m.home)}
                    </div>
                    <div>
                        <div
                            class="match-score"
                            id="matchScore"
                        >
                            0 - 0
                        </div>
                    </div>
                    <div class="match-team">
                        <span
                            class="match-team-color"
                            style="
                                background:
                                ${color(m.away)}
                            "
                        ></span>
                        ${escapeHTML(m.away)}
                    </div>
                </div>
                <div
                    id="matchMinute"
                    class="match-minute"
                >
                    Hazır
                </div>
            </div>
            <div class="match-progress">
                <div
                    id="matchProgress"
                    class="match-progress-bar"
                ></div>
            </div>
            <div
                id="matchEvents"
                class="match-events"
            >
                Maç başlamaya hazır.
            </div>
            <div class="match-actions">
                <button
                    class="btn green"
                    onclick="playMatch()"
                >
                    ⚽ Maçı Oyna
                </button>
                <button
                    class="btn"
                    onclick="simulateMatch()"
                >
                    ⏩ Simüle Et
                </button>
            </div>
        </div>
    `;
}
/* =========================================================
   GERÇEK MAÇ
========================================================= */
function playMatch() {
    if (
        player.energy < 30
    ) {
        alert(
            "Maçı oynamak için en az 30 enerji gerekiyor. Maçı simüle edebilirsin."
        );
        return;
    }
    runMatch(false);
}
/* =========================================================
   MAÇ SİMÜLASYONU
========================================================= */
function simulateMatch() {
    runMatch(true);
}
/* =========================================================
   MAÇ ÇALIŞTIR
========================================================= */
function runMatch(
    fast
) {
    const next =
        getNextMatch();
    if (!next)
        return;
    const m =
        next.match;
    let minute = 0;
    let hs = 0;
    let as = 0;
    const events = [];
    const home =
        getTeamData(
            m.home
        );
    const away =
        getTeamData(
            m.away
        );
    if (!home || !away)
        return;
    const interval =
        fast ? 20 : 90;
    function tick() {
        minute +=
            fast ? 10 : 3;
        if (
            Math.random() < 0.06
        ) {
            if (
                Math.random() <
                (
                    home.strength /
                    (
                        home.strength +
                        away.strength
                    )
                )
            ) {
                hs++;
                events.push(
                    `${minute}' ⚽ ${m.home} gol attı!`
                );
            }
            else {
                as++;
                events.push(
                    `${minute}' ⚽ ${m.away} gol attı!`
                );
            }
        }
        else if (
            Math.random() < 0.15
        ) {
            const actions = [
                "Tehlikeli atak!",
                "Kaleci kurtardı!",
                "Direkten döndü!",
                "Şut auta çıktı!",
                "Savunma son anda araya girdi!"
            ];
            events.push(
                `${minute}' ${
                    actions[
                        Math.floor(
                            Math.random() *
                            actions.length
                        )
                    ]
                }`
            );
        }
        const score =
            document.getElementById(
                "matchScore"
            );
        const min =
            document.getElementById(
                "matchMinute"
            );
        const progress =
            document.getElementById(
                "matchProgress"
            );
        const eventBox =
            document.getElementById(
                "matchEvents"
            );
        if (score) {
            score.textContent =
                `${hs} - ${as}`;
        }
        if (min) {
            min.textContent =
                `${Math.min(
                    minute,
                    90
                )}'`;
        }
        if (progress) {
            progress.style.width =
                `${
                    Math.min(
                        minute,
                        90
                    ) /
                    90 *
                    100
                }%`;
        }
        if (eventBox) {
            eventBox.innerHTML =
                events
                    .slice(-12)
                    .map(
                        e =>
                            `<div class="match-event">
                                ${escapeHTML(e)}
                            </div>`
                    )
                    .join("");
        }
        if (
            minute >= 90
        ) {
            finishMatch(
                m,
                hs,
                as
            );
            return;
        }
        setTimeout(
            tick,
            interval
        );
    }
    tick();
}
/* =========================================================
   MAÇ BİTİŞİ
========================================================= */
function finishMatch(
    m,
    hs,
    as
) {
    m.played = true;
    m.hs = hs;
    m.as = as;
    updateTable(
        m.home,
        m.away,
        hs,
        as
    );
    simulateRemainingMatches();
    /*
       OYUNCU İSTATİSTİKLERİ
    */
    player.careerMatches++;
    player.seasonMatches++;
    player.careerStarts++;
    player.seasonStarts++;
    player.minutes += 90;
    player.seasonMinutes += 90;
    /*
       ENERJİ
    */
    player.energy =
        clamp(
            player.energy - 30,
            0,
            100
        );
    /*
       YORGUNLUK
    */
    player.fatigue =
        clamp(
            player.fatigue + 30,
            0,
            100
        );
    /*
       MAAŞ
    */
    player.money +=
        player.wage;
    /*
       SONUÇ
    */
    const mineHome =
        m.home ===
        player.team;
    const won =
        (
            mineHome &&
            hs > as
        ) ||
        (
            !mineHome &&
            as > hs
        );
    const draw =
        hs === as;
    if (won) {
        player.fanTrust =
            clamp(
                player.fanTrust + 4,
                0,
                100
            );
        player.coachTrust =
            clamp(
                player.coachTrust + 3,
                0,
                100
            );
        player.rating =
            clamp(
                player.rating + 1,
                40,
                99
            );
    }
    else if (draw) {
        player.fanTrust =
            clamp(
                player.fanTrust + 1,
                0,
                100
            );
    }
    else {
        player.fanTrust =
            clamp(
                player.fanTrust - 3,
                0,
                100
            );
        player.coachTrust =
            clamp(
                player.coachTrust - 3,
                0,
                100
            );
    }
    /*
       RASTGELE OYUNCU GOL / ASİST
    */
    const contribution =
        Math.random();
    if (
        contribution < 0.18
    ) {
        player.goals++;
        player.seasonGoals++;
        addNews(
            `${player.name} maçta gol attı! ⚽`,
            "PERFORMANS"
        );
    }
    else if (
        contribution < 0.36
    ) {
        player.assists++;
        player.seasonAssists++;
        addNews(
            `${player.name} maçta asist yaptı! 🎯`,
            "PERFORMANS"
        );
    }
    /*
       KART
    */
    if (
        Math.random() < 0.08
    ) {
        player.yellow++;
        player.seasonYellow++;
    }
    if (
        Math.random() < 0.01
    ) {
        player.red++;
        player.seasonRed++;
    }
    /*
       SAKATLIK
    */
    checkInjury();
    /*
       HAFTA
    */
    game.round++;
    game.week++;
    /*
       RÖPORTAJ
    */
    if (
        game.week % 4 === 0
    ) {
        showInterview();
    }
    else {
        showMatchResult(
            m,
            hs,
            as
        );
    }
    /*
       HABER
    */
    createNews(
        won,
        draw
    );
    saveCareer();
    renderEverything();
}
/* =========================================================
   TABLO GÜNCELLE
========================================================= */
function updateTable(
    home,
    away,
    hs,
    as
) {
    const table =
        game.tables[
            player.league
        ];
    if (!table)
        return;
    const h =
        table.find(
            x => x.team === home
        );
    const a =
        table.find(
            x => x.team === away
        );
    if (!h || !a)
        return;
    h.played++;
    a.played++;
    h.gf += hs;
    h.ga += as;
    a.gf += as;
    a.ga += hs;
    if (
        hs > as
    ) {
        h.wins++;
        h.points += 3;
        a.losses++;
    }
    else if (
        as > hs
    ) {
        a.wins++;
        a.points += 3;
        h.losses++;
    }
    else {
        h.draws++;
        a.draws++;
        h.points++;
        a.points++;
    }
}
/* =========================================================
   DİĞER MAÇLAR
========================================================= */
function simulateRemainingMatches() {
    const rounds =
        game.fixtures[
            player.league
        ];
    if (!rounds)
        return;
    const current =
        rounds[
            game.round
        ];
    if (!current)
        return;
    current.forEach(
        match => {
            if (
                match.played
            )
                return;
            const h =
                getTeamData(
                    match.home
                );
            const a =
                getTeamData(
                    match.away
                );
            if (!h || !a)
                return;
            const hs =
                Math.floor(
                    Math.random() * 4
                );
            const as =
                Math.floor(
                    Math.random() * 4
                );
            match.played = true;
            match.hs = hs;
            match.as = as;
            updateTable(
                match.home,
                match.away,
                hs,
                as
            );
        }
    );
}
/* =========================================================
   TAKIM VERİSİ
========================================================= */
function getTeamData(
    name
) {
    if (
        !game.tables[player.league]
    )
        return null;
    return game.tables[
        player.league
    ].find(
        x => x.team === name
    );
}
/* =========================================================
   SAKATLIK
========================================================= */
function checkInjury() {
    if (
        Math.random() > 0.10
    )
        return;
    const injuries = [
        {
            name:
                "Kas zorlanması",
            matches:
                1,
            severity:
                1
        },
        {
            name:
                "Ayak bileği burkulması",
            matches:
                2,
            severity:
                2
        },
        {
            name:
                "Hamstring sakatlığı",
            matches:
                3,
            severity:
                2
        },
        {
            name:
                "Diz sakatlığı",
            matches:
                5,
            severity:
                3
        },
        {
            name:
                "Ciddi kas sakatlığı",
            matches:
                7,
            severity:
                4
        }
    ];
    const injury =
        injuries[
            Math.floor(
                Math.random() *
                injuries.length
            )
        ];
    player.injured =
        true;
    player.injuryName =
        injury.name;
    player.injuryMatches =
        injury.matches;
    player.injurySeverity =
        injury.severity;
    addNews(
        `${player.name} ${injury.name} nedeniyle ${injury.matches} maç sahalardan uzak kalacak.`,
        "SAKATLIK"
    );
}
/* =========================================================
   SAKATLIK HAFTASI
========================================================= */
function simulateInjuredWeek() {
    if (
        !player.injured
    )
        return;
    simulateRemainingMatches();
    game.week++;
    game.round++;
    player.injuryMatches--;
    player.fatigue =
        clamp(
            player.fatigue - 15,
            0,
            100
        );
    player.energy =
        clamp(
            player.energy + 10,
            0,
            100
        );
    if (
        player.injuryMatches <= 0
    ) {
        player.injured =
            false;
        player.injuryName =
            "";
        player.injurySeverity =
            0;
        addNews(
            `${player.name} sakatlığını atlattı ve takıma döndü.`,
            "SAĞLIK"
        );
    }
    saveCareer();
    renderEverything();
    renderMatch();
}
/* =========================================================
   HASTANE
========================================================= */
function renderHospital() {
    const box =
        document.getElementById(
            "hospitalContent"
        );
    if (!box)
        return;
    if (
        !player.injured
    ) {
        box.innerHTML = `
            <h3>
                🟢 Sakatlığın yok
            </h3>
            <p class="muted">
                Şu anda tedaviye ihtiyacın bulunmuyor.
            </p>
        `;
        return;
    }
    const treatment =
        player.injurySeverity === 1
            ? 3000
            : player.injurySeverity === 2
                ? 8000
                : player.injurySeverity === 3
                    ? 20000
                    : 40000;
    box.innerHTML = `
        <div class="injury">
            <h3>
                🤕
                ${escapeHTML(player.injuryName)}
            </h3>
            <p>
                Kalan maç:
                <b>
                    ${player.injuryMatches}
                </b>
            </p>
        </div>
        <button
            class="btn green"
            onclick="hospitalTreatment(${treatment})"
        >
            💊 Tedavi
            (${money(treatment)} €)
        </button>
        <button
            class="btn red"
            onclick="hospitalSurgery()"
        >
            🏥 Ameliyat
        </button>
        <button
            class="btn"
            onclick="simulateInjuredWeek()"
        >
            🛌 Ameliyatsız Bekle
        </button>
    `;
}
/* =========================================================
   TEDAVİ
========================================================= */
function hospitalTreatment(
    price
) {
    if (
        player.money < price
    ) {
        alert(
            "Tedavi için yeterli paran yok. Bekleyerek iyileşebilirsin."
        );
        return;
    }
    player.money -= price;
    player.injuryMatches =
        Math.max(
            0,
            player.injuryMatches - 1
        );
    if (
        player.injuryMatches === 0
    ) {
        player.injured =
            false;
        player.injuryName =
            "";
        player.injurySeverity =
            0;
    }
    addNews(
        `${player.name} tedavi gördü.`,
        "HASTANE"
    );
    saveCareer();
    renderHospital();
    renderEverything();
}
/* =========================================================
   AMELİYAT
========================================================= */
function hospitalSurgery() {
    const price =
        25000 +
        player.injurySeverity *
        10000;
    if (
        player.money < price
    ) {
        alert(
            `Ameliyat ${money(price)} € tutuyor.`
        );
        return;
    }
    player.money -= price;
    player.injuryMatches =
        Math.max(
            1,
            Math.ceil(
                player.injuryMatches / 2
            )
        );
    player.fatigue =
        clamp(
            player.fatigue + 15,
            0,
            100
        );
    addNews(
        `${player.name} ameliyat oldu. İyileşme süreci hızlandırıldı.`,
        "HASTANE"
    );
    saveCareer();
    renderHospital();
    renderEverything();
}
/* =========================================================
   SAKATLIK PANELİ
========================================================= */
function renderInjury() {
    const box =
        document.getElementById(
            "injuryBox"
        );
    if (!box)
        return;
    if (
        !player.injured
    ) {
        box.innerHTML = "";
        return;
    }
    box.innerHTML = `
        <div class="injury">
            🤕
            <b>
                ${escapeHTML(player.injuryName)}
            </b>
            <br>
            ${player.injuryMatches}
            maç daha kaçıracaksın.
            <br>
            <button
                class="btn red"
                onclick="showPage('hospital')"
            >
                🏥 Hastaneye Git
            </button>
        </div>
    `;
}
/* =========================================================
   DİNLEN
========================================================= */
function restPlayer() {
    player.energy =
        clamp(
            player.energy + 25,
            0,
            100
        );
    player.fatigue =
        clamp(
            player.fatigue - 25,
            0,
            100
        );
    player.coachTrust =
        clamp(
            player.coachTrust - 1,
            0,
            100
        );
    addNews(
        `${player.name} dinlenerek enerji topladı.`,
        "KARİYER"
    );
    /*
       Dinlenme de haftayı ilerletir.
    */
    game.week++;
    game.round++;
    simulateRemainingMatches();
    saveCareer();
    renderEverything();
    renderMatch();
}
/* =========================================================
   MAÇ SONU
========================================================= */
function showMatchResult(
    m,
    hs,
    as
) {
    const box =
        document.getElementById(
            "matchContent"
        );
    const mineHome =
        m.home ===
        player.team;
    const won =
        (
            mineHome &&
            hs > as
        ) ||
        (
            !mineHome &&
            as > hs
        );
    const draw =
        hs === as;
    box.innerHTML = `
        <div class="card">
            <h2>
                ${
                    won
                        ? "🎉 Galibiyet"
                        : draw
                            ? "🤝 Beraberlik"
                            : "😔 Mağlubiyet"
                }
            </h2>
            <h1>
                ${escapeHTML(m.home)}
                ${hs}
                -
                ${as}
                ${escapeHTML(m.away)}
            </h1>
            <p>
                ⚡ Enerji:
                ${player.energy}
            </p>
            <p>
                😴 Yorgunluk:
                ${player.fatigue}
            </p>
            <button
                class="btn green"
                onclick="showPage('home')"
            >
                Devam Et
            </button>
        </div>
    `;
}
/* =========================================================
   RÖPORTAJ
========================================================= */
function showInterview() {
    const box =
        document.getElementById(
            "matchContent"
        );
    box.innerHTML = `
        <div class="card">
            <h2>
                🎤 Maç Sonrası Röportaj
            </h2>
            <p class="muted">
                Muhabir mikrofonu uzattı.
                Ne söyleyeceksin?
            </p>
            <button
                class="interview-option"
                onclick="interviewAnswer(1)"
            >
                🟢 Takım olarak çok iyi mücadele ettik.
            </button>
            <button
                class="interview-option"
                onclick="interviewAnswer(2)"
            >
                🟡 Daha iyi olabilirim.
            </button>
            <button
                class="interview-option"
                onclick="interviewAnswer(3)"
            >
                🔥 Hedeflerim çok büyük.
            </button>
        </div>
    `;
}
function interviewAnswer(
    type
) {
    if (
        type === 1
    ) {
        player.fanTrust += 3;
        addNews(
            `${player.name}: Takım olarak çok iyi mücadele ettik.`,
            "RÖPORTAJ"
        );
    }
    else if (
        type === 2
    ) {
        player.coachTrust += 3;
        addNews(
            `${player.name}: Daha iyi olabilirim.`,
            "RÖPORTAJ"
        );
    }
    else {
        player.reputation += 3;
        addNews(
            `${player.name}: Hedeflerim çok büyük.`,
            "RÖPORTAJ"
        );
    }
    player.fanTrust =
        clamp(
            player.fanTrust,
            0,
            100
        );
    player.coachTrust =
        clamp(
            player.coachTrust,
            0,
            100
        );
    player.reputation =
        clamp(
            player.reputation,
            0,
            100
        );
    saveCareer();
    showPage("home");
}
/* =========================================================
   LİG
========================================================= */
function renderLeague() {
    const country =
        document.getElementById(
            "leagueCountry"
        );
    const league =
        document.getElementById(
            "leagueName"
        );
    if (!country || !league)
        return;
    country.innerHTML = `
        <option>
            Avrupa ve Türkiye
        </option>
    `;
    const leagues =
        Object.keys(TEAMS);
    league.innerHTML =
        leagues
            .map(
                x =>
                    `<option
                        value="${escapeHTML(x)}"
                        ${
                            x === player.league
                                ? "selected"
                                : ""
                        }
                    >
                        ${escapeHTML(x)}
                    </option>`
            )
            .join("");
    drawTable();
}
function changeLeagueCountry() {
    renderLeague();
}
/* =========================================================
   TABLO ÇİZ
========================================================= */
function drawTable() {
    const league =
        document.getElementById(
            "leagueName"
        ).value;
    if (
        !game.tables[league]
    ) {
        game.tables[league] =
            TEAMS[league].map(
                (team, i) => ({
                    team,
                    color:
                        color(team),
                    played:
                        0,
                    wins:
                        0,
                    draws:
                        0,
                    losses:
                        0,
                    gf:
                        0,
                    ga:
                        0,
                    points:
                        0,
                    strength:
                        65 + i % 12
                })
            );
    }
    const table =
        [...game.tables[league]]
            .sort(
                (a, b) => {
                    if (
                        b.points !==
                        a.points
                    ) {
                        return (
                            b.points -
                            a.points
                        );
                    }
                    const gdA =
                        a.gf - a.ga;
                    const gdB =
                        b.gf - b.ga;
                    if (
                        gdA !== gdB
                    ) {
                        return (
                            gdB -
                            gdA
                        );
                    }
                    return (
                        b.gf -
                        a.gf
                    );
                }
            );
    setText(
        "leagueTitle",
        league
    );
    const box =
        document.getElementById(
            "leagueTable"
        );
    if (!box)
        return;
    box.innerHTML = `
        <div class="table-wrap">
            <div class="league-row header">
                <span>#</span>
                <span>Takım</span>
                <span>O</span>
                <span>G</span>
                <span>B</span>
                <span>M</span>
                <span>AV</span>
                <span>P</span>
            </div>
            ${table.map(
                (x, i) => `
                    <div
                        class="
                            league-row
                            ${
                                x.team === player.team &&
                                league === player.league
                                    ? "my-team"
                                    : ""
                            }
                        "
                    >
                        <span>
                            ${i + 1}
                        </span>
                        <span class="club-name">
                            <i
                                class="club-color"
                                style="
                                    background:
                                    ${x.color}
                                "
                            ></i>
                            ${escapeHTML(x.team)}
                        </span>
                        <span>
                            ${x.played}
                        </span>
                        <span>
                            ${x.wins}
                        </span>
                        <span>
                            ${x.draws}
                        </span>
                        <span>
                            ${x.losses}
                        </span>
                        <span>
                            ${x.gf - x.ga}
                        </span>
                        <b>
                            ${x.points}
                        </b>
                    </div>
                `
            ).join("")}
        </div>
    `;
}
/* =========================================================
   FİKSTÜR
========================================================= */
function renderFixtures() {
    const rounds =
        game.fixtures[
            player.league
        ] || [];
    let html = "";
    rounds.forEach(
        (round, index) => {
            html += `
                <div class="card">
                    <h3>
                        ${index + 1}. Hafta
                    </h3>
            `;
            round.forEach(
                match => {
                    html += `
                        <div class="
                            fixture-row
                            ${
                                match.home === player.team ||
                                match.away === player.team
                                    ? "mine"
                                    : ""
                            }
                        ">
                            <div>
                                <div class="fixture-team">
                                    <i
                                        class="club-color"
                                        style="
                                            background:
                                            ${color(match.home)}
                                        "
                                    ></i>
                                    ${escapeHTML(match.home)}
                                </div>
                                <div class="fixture-team">
                                    <i
                                        class="club-color"
                                        style="
                                            background:
                                            ${color(match.away)}
                                        "
                                    ></i>
                                    ${escapeHTML(match.away)}
                                </div>
                            </div>
                            <div class="fixture-score">
                                ${
                                    match.played
                                        ? `${match.hs} - ${match.as}`
                                        : "—"
                                }
                            </div>
                        </div>
                    `;
                }
            );
            html += `
                </div>
            `;
        }
    );
    document.getElementById(
        "fixtureContent"
    ).innerHTML =
        html;
}
/* =========================================================
   İSTATİSTİK
========================================================= */
function renderStats() {
    const stats =
        document.getElementById(
            "statsContent"
        );
    const season =
        document.getElementById(
            "seasonStats"
        );
    if (!stats || !season)
        return;
    stats.innerHTML = `
        <div class="stats-grid">
            <div class="stat">
                <span>Maç</span>
                <b>
                    ${player.careerMatches}
                </b>
            </div>
            <div class="stat">
                <span>İlk 11</span>
                <b>
                    ${player.careerStarts}
                </b>
            </div>
            <div class="stat">
                <span>Gol</span>
                <b>
                    ${player.goals}
                </b>
            </div>
            <div class="stat">
                <span>Asist</span>
                <b>
                    ${player.assists}
                </b>
            </div>
            <div class="stat">
                <span>Sarı Kart</span>
                <b>
                    ${player.yellow}
                </b>
            </div>
            <div class="stat">
                <span>Kırmızı Kart</span>
                <b>
                    ${player.red}
                </b>
            </div>
            <div class="stat">
                <span>Toplam Dakika</span>
                <b>
                    ${player.minutes}
                </b>
            </div>
            <div class="stat">
                <span>Durum</span>
                <b>
                    ${
                        player.injured
                            ? "🤕 Sakat"
                            : "🟢 Sağlıklı"
                    }
                </b>
            </div>
        </div>
    `;
    season.innerHTML = `
        <div class="stats-grid">
            <div class="stat">
                <span>Maç</span>
                <b>
                    ${player.seasonMatches}
                </b>
            </div>
            <div class="stat">
                <span>İlk 11</span>
                <b>
                    ${player.seasonStarts}
                </b>
            </div>
            <div class="stat">
                <span>Gol</span>
                <b>
                    ${player.seasonGoals}
                </b>
            </div>
            <div class="stat">
                <span>Asist</span>
                <b>
                    ${player.seasonAssists}
                </b>
            </div>
            <div class="stat">
                <span>Sarı Kart</span>
                <b>
                    ${player.seasonYellow}
                </b>
            </div>
            <div class="stat">
                <span>Dakika</span>
                <b>
                    ${player.seasonMinutes}
                </b>
            </div>
        </div>
    `;
}
/* =========================================================
   TRANSFER DÖNEMİ
========================================================= */
function transferWindow() {
    const w =
        game.week;
    return (
        w <= 3 ||
        (
            w >= 18 &&
            w <= 21
        )
    );
}
/* =========================================================
   TRANSFERLERİ GÖSTER
========================================================= */
function renderTransfers() {
    const status =
        document.getElementById(
            "transferStatus"
        );
    const offersBox =
        document.getElementById(
            "transferOffers"
        );
    const interestedBox =
        document.getElementById(
            "interestedClubs"
        );
    if (!status)
        return;
    status.textContent =
        transferWindow()
            ? "🟢 Transfer dönemi açık."
            : "🔴 Transfer dönemi kapalı.";
    const offers =
        generateOffers();
    if (
        offers.length === 0
    ) {
        offersBox.innerHTML = `
            <p class="muted">
                Şu anda teklif bulunmuyor.
            </p>
        `;
    }
    else {
        offersBox.innerHTML =
            offers.map(
                offer => `
                    <div class="transfer-offer">
                        <div class="transfer-club">
                            <i
                                class="club-color"
                                style="
                                    background:
                                    ${color(offer.team)}
                                "
                            ></i>
                            ${escapeHTML(offer.team)}
                        </div>
                        <div class="transfer-info">
                            🏆
                            ${escapeHTML(offer.league)}
                            <br>
                            💰 Maaş:
                            ${money(offer.wage)}
                            €/hafta
                            <br>
                            💵 Bonservis:
                            ${money(offer.fee)}
                            €
                        </div>
                        <button
                            class="btn green"
                            onclick="
                                acceptTransfer(
                                    '${escapeJS(offer.team)}',
                                    '${escapeJS(offer.league)}',
                                    ${offer.wage},
                                    ${offer.fee}
                                )
                            "
                        >
                            Transferi Kabul Et
                        </button>
                    </div>
                `
            ).join("");
    }
    const interested =
        generateInterested();
    interestedBox.innerHTML =
        interested
            .map(
                club =>
                    `<p>
                        👀
                        <b>
                            ${escapeHTML(club)}
                        </b>
                        seninle ilgileniyor.
                    </p>`
            )
            .join("");
}
/* =========================================================
   TEKLİFLER
========================================================= */
function generateOffers() {
    if (
        !transferWindow()
    )
        return [];
    /*
       İlk transferden önce
       ilk 3 hafta teklif yok.
    */
    if (
        !player.firstTransfer &&
        game.week < 4
    )
        return [];
    if (
        player.transferLock >
        Date.now()
    )
        return [];
    let teams =
        TEAMS[player.league]
            ? [
                ...TEAMS[player.league]
            ]
            : [];
    const all =
        Object.values(
            TEAMS
        ).flat();
    teams = [
        ...teams,
        ...all
    ]
    .filter(
        team =>
            team !==
            player.team
    );
    const unique =
        [...new Set(teams)]
            .sort(
                () =>
                    Math.random() -
                    .5
            );
    return unique
        .slice(0, 3)
        .map(
            team => ({
                team,
                league:
                    findLeague(team),
                wage:
                    Math.round(
                        player.wage *
                        (
                            1.3 +
                            Math.random()
                        )
                    ),
                fee:
                    Math.round(
                        10000 +
                        player.rating *
                        2500 +
                        Math.random() *
                        50000
                    )
            })
        );
}
/* =========================================================
   İLGİLENEN KULÜPLER
========================================================= */
function generateInterested() {
    const all =
        Object.values(
            TEAMS
        ).flat();
    return [
        ...new Set(
            all
                .filter(
                    team =>
                        team !==
                        player.team
                )
                .sort(
                    () =>
                        Math.random() -
                        .5
                )
                .slice(0, 5)
        )
    ];
}
/* =========================================================
   LİG BUL
========================================================= */
function findLeague(
    team
) {
    for (
        const league in TEAMS
    ) {
        if (
            TEAMS[league]
                .includes(team)
        ) {
            return league;
        }
    }
    return "";
}
/* =========================================================
   TRANSFER KABUL
========================================================= */
function acceptTransfer(
    team,
    league,
    wage,
    fee
) {
    if (
        !transferWindow()
    ) {
        alert(
            "Transfer dönemi kapalı."
        );
        return;
    }
    player.money +=
        fee;
    player.team =
        team;
    player.league =
        league;
    player.wage =
        wage;
    player.firstTransfer =
        true;
    player.transferLock =
        Date.now() +
        1000 *
        60 *
        60 *
        24 *
        120;
    /*
       Yeni lig oluştur.
    */
    generateLeague(
        league
    );
    game.fixtures[league] =
        createNewFixtures(
            league
        );
    addNews(
        `${player.name}, ${team} takımına transfer oldu.`,
        "TRANSFER"
    );
    saveCareer();
    renderEverything();
    showPage("home");
}
/* =========================================================
   YENİ FİKSTÜR
========================================================= */
function createNewFixtures(
    league
) {
    const teams =
        [...TEAMS[league]];
    const rounds = [];
    let list =
        [...teams];
    const n =
        list.length;
    for (
        let r = 0;
        r < n - 1;
        r++
    ) {
        const matches = [];
        for (
            let i = 0;
            i < n / 2;
            i++
        ) {
            matches.push({
                home:
                    list[i],
                away:
                    list[n - 1 - i],
                played:
                    false,
                hs:
                    null,
                as:
                    null
            });
        }
        rounds.push(
            matches
        );
        list = [
            list[0],
            list[n - 1],
            ...list.slice(
                1,
                n - 1
            )
        ];
    }
    return [
        ...rounds,
        ...rounds.map(
            round =>
                round.map(
                    match => ({
                        home:
                            match.away,
                        away:
                            match.home,
                        played:
                            false,
                        hs:
                            null,
                        as:
                            null
                    })
                )
        )
    ];
}
/* =========================================================
   MAĞAZA
========================================================= */
function renderShop() {
    const items = [
        [
            "⚡",
            "Enerji +10",
            1000
        ],
        [
            "🔋",
            "Enerji +25",
            2200
        ],
        [
            "🚀",
            "Enerji +50",
            4500
        ],
        [
            "⭐",
            "GEN +1",
            6000
        ],
        [
            "🌟",
            "GEN +3",
            16000
        ],
        [
            "😴",
            "Yorgunluk -20",
            2000
        ]
    ];
    document.getElementById(
        "shopContent"
    ).innerHTML =
        items.map(
            item => `
                <div class="shop-item">
                    <div class="shop-icon">
                        ${item[0]}
                    </div>
                    <h3>
                        ${item[1]}
                    </h3>
                    <div class="price">
                        ${money(item[2])} €
                    </div>
                    <button
                        class="btn"
                        onclick="
                            buyShopItem(
                                ${item[2]},
                                '${escapeJS(item[1])}'
                            )
                        "
                    >
                        Satın Al
                    </button>
                </div>
            `
        ).join("");
}
/* =========================================================
   MAĞAZA SATIN AL
========================================================= */
function buyShopItem(
    price,
    name
) {
    if (
        player.money < price
    ) {
        alert(
            "Yeterli paran yok."
        );
        return;
    }
    player.money -=
        price;
    if (
        name.includes("Enerji")
    ) {
        const match =
            name.match(/\d+/);
        if (match) {
            const number =
                Number(
                    match[0]
                );
            player.energy =
                clamp(
                    player.energy +
                    number,
                    0,
                    100
                );
        }
    }
    if (
        name === "GEN +1"
    ) {
        player.rating =
            clamp(
                player.rating + 1,
                40,
                99
            );
    }
    if (
        name === "GEN +3"
    ) {
        player.rating =
            clamp(
                player.rating + 3,
                40,
                99
            );
    }
    if (
        name.includes(
            "Yorgunluk"
        )
    ) {
        player.fatigue =
            clamp(
                player.fatigue - 20,
                0,
                100
            );
    }
    addNews(
        `${player.name} mağazadan ${name} satın aldı.`,
        "MAĞAZA"
    );
    saveCareer();
    renderEverything();
}
/* =========================================================
   YAŞAM
========================================================= */
function renderProperty() {
    const items = [
        [
            "🚲",
            "Bisiklet",
            8000,
            3
        ],
        [
            "🏍️",
            "Motosiklet",
            25000,
            6
        ],
        [
            "🚗",
            "Araba",
            50000,
            10
        ],
        [
            "🏎️",
            "Spor Araba",
            150000,
            15
        ],
        [
            "🏠",
            "Ev",
            250000,
            20
        ],
        [
            "🏡",
            "Villa",
            750000,
            25
        ],
        [
            "🛥️",
            "Yat",
            1500000,
            30
        ],
        [
            "🚢",
            "Gemi",
            5000000,
            40
        ]
    ];
    document.getElementById(
        "propertyContent"
    ).innerHTML =
        items.map(
            item => `
                <div class="shop-item">
                    <div class="shop-icon">
                        ${item[0]}
                    </div>
                    <h3>
                        ${item[1]}
                    </h3>
                    <p class="muted">
                        Yorgunluk -${item[3]}
                    </p>
                    <div class="price">
                        ${money(item[2])} €
                    </div>
                    <button
                        class="btn"
                        onclick="
                            buyProperty(
                                ${item[2]},
                                ${item[3]},
                                '${escapeJS(item[1])}'
                            )
                        "
                    >
                        Satın Al
                    </button>
                </div>
            `
        ).join("");
}
/* =========================================================
   YAŞAM SATIN AL
========================================================= */
function buyProperty(
    price,
    reduction,
    name
) {
    if (
        player.money < price
    ) {
        alert(
            "Yeterli paran yok."
        );
        return;
    }
    player.money -=
        price;
    player.fatigue =
        clamp(
            player.fatigue -
            reduction,
            0,
            100
        );
    addNews(
        `${player.name} ${name} satın aldı.`,
        "YAŞAM"
    );
    saveCareer();
    renderEverything();
}
/* =========================================================
   HABER EKLE
========================================================= */
function addNews(
    text,
    type
) {
    if (!game.news)
        game.news = [];
    game.news.push({
        text,
        type,
        date:
            getDateText()
    });
    if (
        game.news.length >
        80
    ) {
        game.news.shift();
    }
}
/* =========================================================
   HABER OLUŞTUR
========================================================= */
function createNews(
    won,
    draw
) {
    const age =
        player.age;
    let headline;
    if (
        age < 21
    ) {
        headline =
            won
                ? `🌟 Genç yıldız ${player.name} dikkat çekiyor!`
                : `👀 Genç oyuncu ${player.name} için gelişim zamanı.`;
    }
    else if (
        age < 26
    ) {
        headline =
            won
                ? `📈 ${player.name} yükselişini sürdürüyor!`
                : `🗣️ ${player.name} performansıyla gündemde.`;
    }
    else if (
        age < 31
    ) {
        headline =
            won
                ? `⭐ ${player.name} takımın önemli oyuncularından.`
                : `📉 ${player.name} için form tartışması başladı.`;
    }
    else {
        headline =
            won
                ? `👑 Tecrübeli yıldız ${player.name} yine sahnede.`
                : `📰 ${player.name}'in geleceği tartışılıyor.`;
    }
    addNews(
        headline,
        "GAZETE"
    );
    const social =
        won
            ? `🔥 Sosyal medya: ${player.name} bugün taraftarları mest etti!`
            : `💬 Sosyal medya: Taraftarlar ${player.name}'in performansını tartışıyor.`;
    addNews(
        social,
        "SOSYAL MEDYA"
    );
    if (
        player.rating >= 65
    ) {
        const interested =
            generateInterested();
        if (
            interested.length
        ) {
            addNews(
                `👀 ${interested[0]} kulübünün ${player.name}'i takip ettiği öğrenildi.`,
                "TRANSFER"
            );
        }
    }
}
/* =========================================================
   ANA SAYFA HABERLERİ
========================================================= */
function renderHomeNews() {
    const box =
        document.getElementById(
            "homeNews"
        );
    if (!box)
        return;
    box.innerHTML =
        game.news
            .slice(-5)
            .reverse()
            .map(
                item => `
                    <div class="news-item">
                        <span class="news-type">
                            ${escapeHTML(item.type)}
                        </span>
                        <div>
                            ${escapeHTML(item.text)}
                        </div>
                        <div class="news-date">
                            ${escapeHTML(item.date)}
                        </div>
                    </div>
                `
            )
            .join("");
    if (
        !game.news.length
    ) {
        box.innerHTML = `
            <p class="muted">
                Henüz haber yok.
            </p>
        `;
    }
}
/* =========================================================
   TÜM HABERLER
========================================================= */
function renderNews() {
    const box =
        document.getElementById(
            "newsContent"
        );
    if (!box)
        return;
    box.innerHTML =
        game.news
            .slice()
            .reverse()
            .map(
                item => `
                    <div class="news-item">
                        <span class="news-type">
                            ${escapeHTML(item.type)}
                        </span>
                        <div>
                            ${escapeHTML(item.text)}
                        </div>
                        <div class="news-date">
                            ${escapeHTML(item.date)}
                        </div>
                    </div>
                `
            )
            .join("");
    if (
        !game.news.length
    ) {
        box.innerHTML = `
            <div class="card">
                <p class="muted">
                    Henüz haber bulunmuyor.
                </p>
            </div>
        `;
    }
}
/* =========================================================
   TEKNİK DİREKTÖRLÜK
========================================================= */
function renderManager() {
    const box =
        document.getElementById(
            "managerContent"
        );
    if (!box)
        return;
    if (
        player.careerMode ===
        "Teknik Direktör"
    ) {
        box.innerHTML = `
            <div class="manager">
                <div class="manager-icon">
                    👔
                </div>
                <h2>
                    Teknik Direktör Kariyeri
                </h2>
                <p class="muted">
                    Artık teknik direktörlük kariyerindesin.
                </p>
            </div>
        `;
        return;
    }
    if (
        player.age < 32
    ) {
        box.innerHTML = `
            <div class="manager">
                <div class="manager-icon">
                    👔
                </div>
                <h2>
                    Gelecekte Teknik Direktör
                </h2>
                <p class="muted">
                    Futbolculuk kariyerinden sonra
                    teknik direktör olabilirsin.
                </p>
                <p>
                    Mevcut yaşın:
                    <b>
                        ${player.age}
                    </b>
                </p>
                <p>
                    Teknik direktörlük için:
                    <b>
                        32 yaş
                    </b>
                </p>
            </div>
        `;
        return;
    }
    box.innerHTML = `
        <div class="manager">
            <div class="manager-icon">
                👔
            </div>
            <h2>
                Teknik Direktör Kariyeri
            </h2>
            <p class="muted">
                Futbolculuk kariyerini
                sonlandırıp teknik direktör olabilirsin.
            </p>
            <button
                class="btn green"
                onclick="becomeManager()"
            >
                Teknik Direktör Ol
            </button>
        </div>
    `;
}
/* =========================================================
   TEKNİK DİREKTÖR OL
========================================================= */
function becomeManager() {
    if (
        player.age < 32
    ) {
        alert(
            "Teknik direktör olmak için en az 32 yaşında olmalısın."
        );
        return;
    }
    player.careerMode =
        "Teknik Direktör";
    addNews(
        `${player.name} futbolculuk kariyerini tamamlayıp teknik direktör oldu.`,
        "KARİYER"
    );
    saveCareer();
    renderManager();
    renderEverything();
}
/* =========================================================
   YENİ SEZON
========================================================= */
function newSeason() {
    game.season++;
    game.week = 0;
    game.round = 0;
    player.seasons++;
    /*
       Sezon istatistiklerini sıfırla.
    */
    player.seasonMatches = 0;
    player.seasonStarts = 0;
    player.seasonGoals = 0;
    player.seasonAssists = 0;
    player.seasonMinutes = 0;
    player.seasonYellow = 0;
    player.seasonRed = 0;
    /*
       Fiziksel durum.
    */
    player.energy = 100;
    player.fatigue = 0;
    /*
       Yeni lig / fikstür.
    */
    game.tables = {};
    game.fixtures = {};
    generateLeague(
        player.league
    );
    createFixtures();
    addNews(
        `${game.season}/${game.season + 1} sezonu başladı!`,
        "SEZON"
    );
    saveCareer();
    renderEverything();
    showPage("home");
}
/* =========================================================
   GENEL CLAMP
========================================================= */
function clamp(
    value,
    min,
    max
) {
    return Math.max(
        min,
        Math.min(
            max,
            Number(value) || 0
        )
    );
}
/* =========================================================
   GÜVENLİ HTML
========================================================= */
function escapeHTML(
    value
) {
    return String(
        value ?? ""
    )
    .replace(
        /&/g,
        "&amp;"
    )
    .replace(
        /</g,
        "&lt;"
    )
    .replace(
        />/g,
        "&gt;"
    )
    .replace(
        /"/g,
        "&quot;"
    )
    .replace(
        /'/g,
        "&#039;"
    );
}
/* =========================================================
   GÜVENLİ JS STRING
========================================================= */
function escapeJS(
    value
) {
    return String(
        value ?? ""
    )
    .replace(
        /\\/g,
        "\\\\"
    )
    .replace(
        /'/g,
        "\\'"
    )
    .replace(
        /\n/g,
        "\\n"
    )
    .replace(
        /\r/g,
        "\\r"
    );
}
/* =========================================================
   BAŞLANGIÇ
========================================================= */
document.addEventListener(
    "DOMContentLoaded",
    () => {
        /*
           Sayfa ilk açıldığında
           kayıt ekranı görünür.
        */
        const save =
            localStorage.getItem(
                "futbolKariyeriV2"
            );
        /*
           Kayıt varsa buton yine
           çalışır. Kullanıcı isterse
           yeni kariyer başlatabilir.
        */
        if (save) {
            const button =
                document.querySelector(
                    "#registerPage .secondary"
                );
            if (button) {
                button.textContent =
                    "💾 Kayıtlı Kariyeri Yükle";
            }
        }
        /*
           Menü dışına basınca
           Daha Fazla menüsünü kapat.
        */
        const moreMenu =
            document.getElementById(
                "moreMenu"
            );
        if (moreMenu) {
            moreMenu.addEventListener(
                "click",
                event => {
                    if (
                        event.target ===
                        moreMenu
                    ) {
                        hideMoreMenu();
                    }
                }
            );
        }
    }
);
/* =========================================================
   SAYFA YÜKLENDİĞİNDE
========================================================= */
window.addEventListener(
    "load",
    () => {
        /*
           Otomatik yükleme YAPMIYORUZ.
           Kullanıcı "Kayıtlı Kariyeri
           Yükle" butonuna basıyor.
        */
        console.log(
            "Futbol Kariyeri hazır."
        );
    }
);