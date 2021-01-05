import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>お問い合わせ</h1>
        <p>
          お電話でのお問い合わせは0836-22-2631まで
        </p>
        <p>※ただし、医療相談や予約、医師・看護師等への直接のご意見はお受けできませんので、予めご了承下さい。</p>
        <ul>
          {/* <li><Link to="/contact/">Basic contact form</Link></li>
          <li><Link to="/file-upload/">Form with file upload</Link></li> */}
          <li><Link to="/recaptcha/">メールによるお問い合わせはこちら</Link></li>
        </ul>
      </div>
    );
  }
}
