const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content fixed bottom-0">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            DevTinder
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
