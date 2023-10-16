import "./OurShop.scss";

function OurShop() {
  const shopList = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/efb3/4511/b94a8abf90fc0ce9fe2b1d53965f70ce?Expires=1697414400&Signature=nYJ-g6w-ld9cnVmJYuSa5Q~J~ZQdgY4aLfEf7tKjXVBPSBolzpxmc2iwfW1IA53N2IgJBBx-pd9ICACm5tXLBU3i1U5Q0jmaugiMlfKcxL~4NZLnMKyiAHNEmKC3FeHFHpE36x6l5U-7DsbfVaMkGnUgueRp1AHRJ0ZjbLYvdx1Gj3CmDL01ZTVDOACx8dh8RiRDyJ7J7n0VI7KIkFaKj0QybJ7P43urrCBS96erhmYJ0ZB4mRqbrsuzyPrhIRrcTcvVOaqDxQ1WGHRpZZek6CAPOj8JmmT3fKp-0Iwpg7St4CzFFGzKVp-ZEYAR55fgNewPimyeGYX4Jq1mIu7J7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Ultimate gaming PC",
      popularity: "NEW",
      price: "1099",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/f584/0304/c2e78438dfed7376e0e86fdc5150c569?Expires=1697414400&Signature=V8lrPAkI~wW7pcNrN~O54372-FA6SDpNp~UpAxJ64s55azv1eR3KL2yUinXO36CuXVz7uW7Fsk2EqP2YYr0MQ1Q0GxyEQrIASJOjqhhiRjhEs6VADX3Dmi36ncXQk0bkcEf4pTSqvzMZ4AyMDlUGkgOgv887WYglJ2ngbwA47-h-oLPul5bR7H0FGZNvmypwuRsHz5BVAoB7DszaGh4vmlrwr0u7h~k3sy6l-53qiJteZTHcwssMejIew8LZ2xHwljxVsun-50SKfq3YytRJhkhD7~oQ-PB2KBkkAMUyk-rftKgQ4P~caZub5yyRGW6FkZVhzUlZdlyWQp90yiraJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Xbox gaming controller",
      popularity: "POPULAR",
      price: "599",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/bf44/b7ff/0c9c13c69209d7efe7ed3423224a95f4?Expires=1697414400&Signature=ZY7MEYVNv~baLiLf9Oax8qSfZNC5pEw30MZHDLT-e2ZPTTcArcUMqVmyR-jsWwVmxGzY2vgx5PLVGjAqOb27B2yO4SKbqiP5Ph6s7OfmZ4XJFMfJ6F60NYnvdujremB-pNniUWESw~7o9YRkwrK-pts9lFwtZFmtaQmI22cWguZweXQKyReezmdXLupDwk6clEqrWpoQ8EmI3efUFIuVa5l8pmjlpitHbJ1NnU5D23ZksISLrNFImo1GO5PVcd-XXQUVY-PoiPj-DvDqshauuvLg499GjqQyS82PuYHR6z-3ZvxFcQPZrqMJt~6uvKli-zWanZTX4Rf--vEspWuNng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Mechanical gaming keyboard",
      popularity: "NEW",
      price: "399",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c712/7419/b58edba6c7feacaac7759f254bafdfc2?Expires=1698019200&Signature=SeMcJrlp5AVwub~pQ3AzYCRyBfkKwVqI9Tcq35ebtqp5Gc4kt0UoC0CTqhYlztq2D2hPG00NJ1aeLivIRiIB0XRCkhuUmqAX9~GkxpREwTsCOfYXrJbSjAyZoef-5suWCHihSr4gRnTmhpyl5PGt7cQESNKTA6jTde6aOXz4lnIZvWOCjd9gkaFEJbc1xk67xrHna~rJR7wG9Sj6zU7klbwEFL3b99AfR6mxco9f8hm3ZoDvF~SGefy1NLRtGLFx8Z1wqWfOx72JrMmGUzYpPTqgISeTmvePdlla0Cu6a26Wf-JX0e8m1WxrgPhdpvxX8T4tupiYa8QLpe5fVLMRgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Gaming headphone",
      popularity: "POPULAR",
      price: "599",
    },
  ];

  return (
    <div className="shop">
      <div className="shoping__head">
        <h1 className="shoping__title">
          Our Shop
          <div className="shopingTitle"></div>
        </h1>
      </div>

      <div className="shop__card">
        {shopList.map((item, index) => (
          <div className="shop__card__item" key={index}>
            <div className="shop__card__item__img">
              <img src={item.image} alt="" className="product__img" />
            </div>
            <div className="shop__desc__info">
              <div className="shop__card__item__popularity">
                <span className="popular">{item.popularity}</span>
              </div>
              <div className="shop__card__item__title">
                <h3 className="__card__item__title">{item.title}</h3>
              </div>

              <div className="shop__card__item__price">
                <span>${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add the "View All" button here */}
      <div className="view-all-button">
        <button className="shop__view__btn">View All</button>
      </div>
    </div>
  );
}

export default OurShop;
