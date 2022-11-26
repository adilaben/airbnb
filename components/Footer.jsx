const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-17 md:px-32  my-10 text-gray-600 ">
        <div className="space-y-4 text-xs text-gray-800 text-center ">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 text-center">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Airbnb clone</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 text-center">
          <h5 className="font-bold">HOST</h5>
          <p>Adila Ben</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 text-center">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
        </div>
      </div>
      <div className=" pb-3 text-gray-800 font-semibold text-center text-sm border-t pt-3">
        <p>
          {new Date().getFullYear()} &copy; &nbsp;
          <button
            target="_blank"
            href="https://www.linkedin.com/in/aadila-bendahou/"
          >
            Aâdila Bendahou.
          </button>
          &nbsp; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
