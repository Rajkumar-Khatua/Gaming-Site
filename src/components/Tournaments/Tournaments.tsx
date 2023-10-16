import "./Tournaments.scss";

function Tournaments() {
  const gamingEvents = [
    {
      eventName: "Fortnite World Championship",
      date: "15 Aug 2023",
      time: "16:30 PM IST",
      playMode: "Solo",
      platform: "Console (Xbox)",
      prize: "$1,000,000",
      image:
        "https://s3-alpha-sig.figma.com/img/0da1/acc9/21e6029f9bd8c0a6514fe9a3f07a5efd?Expires=1697414400&Signature=JLeJ-hIbnp3pRO002E~RJ5Ad4-PDL1~YDg8uJ91GDrNp6kETcLsIBlRyB9o5sZE~whMB2Kl-mWL-PMZKsTHOu202jUqFb2o-qdklbE3AwLg-8gmP3nC~EZ27-ydXsGrsENa0PFGgYRkgBhIYL1DiZj9MAOj61dbipurX3yAW0D5Rw0ok8tBswRsO2scxs41Aj3wrtIBpYo1NqPAdNBqgYIoe53uW9j3SI0AC1~O8kMn07XOJokTE7pbHBiNRprpVn7uOqJvgoTud~TP3JW-Ed-3-lFDKUv76sTRnUEe0Uy~1FwLQIrJQPlAAEY8xC1xi7SK42pEXbIpnukg5YvHPsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      eventName: "League of Legends Regional Tournament",
      date: "22 Oct 2023",
      time: "13:45 PM IST",
      playMode: "Team (5v5)",
      platform: "PC",
      prize: "$500,000",
      image:
        "https://s3-alpha-sig.figma.com/img/9748/9302/e28f638c50a1951dff37ae0a33f47377?Expires=1697414400&Signature=nllCZFBW5p9fCXbNTzJLgjKJ8ABdwmuANe4qqI2FJad1qNKzREGJhu8TYk~Dt0egTiUhGKuEHb4gVyw-KMzCu3vqucjJcwZEqF-MvT6xK~u-IyqGTGn80AkUiLEyJf81JQWTSmo1c16~4FDO9aqsGDnEP8DZ01lcZfyzdlrG-rcs76~G3OcW~2mR6RaPSNYS33vYYHWLmBZn1nFTVVQGbB0LZzoxllJ-R78rT7lth1M2tm4T1nNJAiq0t9oNWYRe-UbW3YqFexz0FZKKF9YkGe8C3gWw0QhiHD0iofzdabpP6tJ1qt6-Gvva-A7-K3VYXtXOjLiODKeHm59jrxq9Pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      eventName: "Call of Duty Warzone Pro League",
      date: "5 Nov 2023",
      time: "18:15 PM IST",
      playMode: "Duos",
      platform: "PlayStation",
      prize: "$750,000",
      image:
        "https://s3-alpha-sig.figma.com/img/e6e6/20ee/e364cc595ea9a7eac859d08e0fe8c4c2?Expires=1697414400&Signature=ERuejYd12cJtDBnbK8tNwZ5Sj0RMFu0ZUWwqDSQEK5tWW1-4OT6r8Qnu7aaXgsLUtfkSGJYAnYYsIJs6kDCAI~jmT7bpANoHyx8ugdMqxNFEKwHAp4jkvTaoHK~brip1yNOT75kwQfusp1qV0EgOPIj4SQBtxwY1PlnMb94om7SsLHZWvhorexYTL60Uw25bZzUD8OsmOusKPR--AZjnBgmCEIWZpeHgwLwUyv1Q~H9XzZA5S9Cw0aA542ubaLebxm6P6-chCyVdHgkIrQ6BgGOUo0uc1TKWiSVlj9xpg9gWyHlEv6Su~dsS1Q-O2r5wFtMt7TNWBBIMNH88uxMx6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      eventName: "Dota 2 International Championship",
      date: "30 Jul 2023",
      time: "19:00 PM IST",
      playMode: "Team (5v5)",
      platform: "PC",
      prize: "$2,500,000",
      image:
        "https://s3-alpha-sig.figma.com/img/53cd/cb5b/343cb16e8d337ba167d1cfb10cd83f7b?Expires=1697414400&Signature=dfKfRXRonzz4~n1Bsd~JnZY7oclDS8c~WwqV0Wnau1ovkHtQYkQZzzDHH9Rt7~tBdkXKJnfkrOnbZo6eO0Ini04ddjse-2o9HNwocX2xJTV9Vl-jykmznBVsWVnVV62WeyMHpRLTTG56Uvw0rPyqnbkGUHVNK7J0oLkww45gackfHjeAe0JJYSAkyutnQ8P0rJPduFCLH1vutcUD~4jp9Ursvo3vzMbGm6U~Wiit5GMYGJeOmzqjCal1XzDU1zxzn7pQFl4Nj8bks3L3YWgjghJtsZTtk0h-ye0rRPJn-4Vw1HPe1N20fH4~-Fsa-6vjyh1dk3VpuvWh32OeYOygpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      eventName: "Overwatch League Grand Finals",
      date: "8 Sep 2023",
      time: "15:30 PM IST",
      playMode: "Team (6v6)",
      platform: "PC",
      prize: "$1,200,000",
      image:
        "https://www.figma.com/file/bHSQIeGWi9nWWEJWHyGzf0/image/38b7ce24798d903c3a4c5faa644f8a589dee7ef1",
    },
    {
      eventName: "Rocket League Championship Series",
      date: "12 Nov 2023",
      time: "17:00 PM IST",
      playMode: "Team (3v3)",
      platform: "Cross-Platform",
      prize: "$500,000",
      image:
        "https://www.figma.com/file/bHSQIeGWi9nWWEJWHyGzf0/image/55127c73c2991c6de5f509014ebf29123c2024dd",
    },
  ];


  return (
    <div className="tournaments">
      <div className="head__Container">
        <h1 className="tournament__title">
          Tournaments
          <div className="tournamentTitle"></div>
        </h1>
      </div>
      <div className="card__parent">
        {gamingEvents.map((item, index) => (
          <div
            className="card__container"
            key={index}
          >
            <div className="card__img__container">
              <img src={item.image} alt="" className="cardImg" />
            </div>
            <div className="info__container">
              <div className="info__container__title">{item.eventName}</div>
              <div className="info__container__timeDate">
                {item.date} / {item.time}
              </div>
              <div className="info__container__price">
                <div className="info__container__prices">
                  <span className="playMode">Play Mode</span>
                  <span className="playMode__ans">{item.playMode}</span>
                </div>
                <div className="info__container__prices">
                  <span className="playMode">Platform</span>
                  <span className="playMode__ans">{item.platform}</span>
                </div>
                <div className="info__container__prices">
                  <span className="playMode">Prize</span>
                  <span className="playMode__ans">{item.prize}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="viewMore">View More</button>
    </div>
  );
}

export default Tournaments;
