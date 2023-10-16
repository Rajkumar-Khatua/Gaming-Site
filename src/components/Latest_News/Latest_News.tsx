import "./Latest_News.scss";
function LatestNews() {
  const newsList = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4539/95c4/8fa15a5ca20db70d61f811311da0771e?Expires=1697414400&Signature=WJaqTkgZIK-OaYRZWUd-Sal4ZZ-IZduc3iccLVGEpo3Pu-LuYfRfGoYCNQlekMZRTG444F5JAoQ2p6aiFZYDRamG6NFCtXjZRcTDiJjG9erbGTWJfhfFa-kUMDYUF7tx6ywBSZVv9CDLERO55wpA9TUdl8O0a~~XkUjMQ2FCI8ej3x6ZL4~iVXfF2BcEt2fpjNqKwXWPv6d6rYNjFxU9AcrshS7UdB~6tNmcpDhf5qKFDsn00GNcQ1pZC-luj0lLqSFn~dnzH5GsjoLxdqurLCyXDrbMeS9~V4BNJFSZfBXVJ7MMtNiLlzQHQY0Yt6aic6xeNxe7VOcDXD7nynE~Kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      desc: "Pro tips: How to improve your aim and reflexes in eSports",
      category: "NEW",
      date: "Aug 27 2023",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6f14/2890/daaa0c39af0a09393e0a0b448c53bed0?Expires=1697414400&Signature=BDJN2nFhQB1QJwKJ52HZ8XVhBB62xGp6DnFCUp4A8GNYK8uxKZFNsE8ffakBjCtcBnJs3KgCjfUZKPKYOLii7t7ywdtZP6HXerlX4DdWY8~ORRvOWh98H4hgnONAqqfAJN0Z4K6aJ622Wzm6rsyNpFjSzaUD7hVtM0aJV8ulpilyVzASr3EbKvv2VK5MYhY536hRKhqDeVVsmdGIIXeyvTOlyEOdwnDWVP7AqrUqH7YymuEgQ8fRwCtdLeEM~Aja1woqpzl6q6k9SX-Cihq-QvwuDBAm3FhAhWZA68zk8zyIm2GfkvpnpxQvHRt79ck5j6fIGrZBvT3vE6p7vy3mOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      desc: "Top 10 eSports games to watch and play in 2023",
      category: "POPULAR",
      date: "Aug 25 2023",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/55e6/e480/3e43598b7e7a8cc46e179d89d62b07a7?Expires=1697414400&Signature=Y4PQL2xT1vpXmnyLqFedXQb8d1eK8E49ygBJ8xErdRNW7r1bun9w1kU703WWviWn0bV~GRdlTah2Dq2ZtBIU-bkD5PxAWdGXnBC35x~EG~wysfIYT7bflmdbAgZiH1Go0H8MLE5x-7kDcCd6Q2-SLKHQdV-NnTHwLkJR77VjxxfA2VrKQge0U-D6vjNtVf4L6Cd-qCkQj4RisDlvriJPMB0tc6iuBkjALHUdPwM9ys-2I4EAb3wFLFBa8uWPe07-5WQ1zw2VaAExzphrUzrhb2BDInsmZ2L7I5NU7NoBR~k1KAqgrUhCeuBvLP3s88KHfEC-CYSLmxNztjlui4HIqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      desc: "The life of a professional eSports gamer",
      category: "NEW",
      date: "Aug 22 2023",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/9056/c607/8a39042a0ff5810523693677d22bdb00?Expires=1698019200&Signature=cB0Mzc1wkd1FnJp1rWhAPp1BE6YP5opVAgSB-oiP2isR-9ALt4Q7QJ32b8WebbnVNRfPJhU8XKce3ebrjhAT12Ol3qCbUHjCc8de8~DmQqosEkp9ZjhLZRYIpHZm1l9U5ZsIddjQyhFC5PYA~ttpSwsvdBJsKzFJCEJ05EQd7U~uP70Vt0VBkE4LM3POF2CJLz1tETrlQsymLJHRmZUDmllom1wzGmYw534lgbSVmt6RGy2W-8z6-tjGWfjs3rrCs9LCOeY3o6cnJiMQTudiBIbOqVXOIh7809t6IpUkY3uhmYDVHZl5sngp9P2aRcRvtXjprgxIfHRtThjfwq8Vfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      desc: "The best gaming accessories and gadgets for every gamer",
      category: "Sponsored",
      date: "Aug 22 2023",
    },
  ];

  return (
    <div className="latest-news">
      <div className="news__header">
        <h1 className="news__title">
          Latest News
          <div className="newsTitle"></div>
        </h1>
      </div>

      <div className="news__list">
        {newsList.map((item, index) => (
          <div className="news__item" key={index}>
            <div className="news__item__image">
              <img src={item.image} alt="" className="news__img" />
            </div>
            <div className="news__item__info">
              <div className="initial">
                <div className="news__item__category">
                  <span className="category">{item.category}</span>
                </div>
                •
                <div className="news__item__date">
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="news__item__headline">
                <h3 className="__item__headline">{item.desc}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="read-more-button">
        <button className="news__read__btn">View All</button>
      </div>
    </div>
  );
}

export default LatestNews;
