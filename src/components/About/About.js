import React from "react"

const About = (props) => {

  const [panel, setPanel] = React.useState(null);

  const openPanel = (ev) => {
    panel?.classList?.remove('show');
    setPanel(document.getElementById(ev.target.attributes.getNamedItem('data-target').value));
    document.getElementById(ev.target.attributes.getNamedItem('data-target').value).classList.add('show');
  }

  return <>
    <div className="container" style={{color: props.themeMode==='light'?'':'whitesmoke'}}>
      <div className="m-2 my-3">
        <h2 >Welcome to TextUtils - Your Text Manipulation Toolkit</h2>
        <div>
          At TextUtils, we understand the power of words and the importance of clear, concise communication. That's why we've created a versatile platform that empowers you to manipulate text effortlessly. Whether you're a writer, coder, student, or just someone looking to make text work for you, TextUtils has the tools you need.
        </div>
        <br />
        <h4>Our Mission</h4>
        <div>
          At TextUtils, our mission is to make text manipulation easy, efficient, and accessible to everyone. We believe that the right tools can help you express yourself better, save time, and enhance your productivity. That's why we've developed a range of text-related utilities to cater to a variety of needs.
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div 
            className="card-header" 
            id="headingOne"
            style={{background: props.themeMode==='light'?'whitesmoke': props.themeColor}}
          >
            <h2 className="mb-0">
              <button onClick={openPanel} className={`btn btn-link text-${props.themeMode==='light'?'dark':'light'}`} style={{ color: "#183755",  textDecoration: 'none' }} type="button" data-toggle="collapse" data-target="collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What Can You Do with TextUtils?
              </button>
            </h2>
          </div>

          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div 
              className="card-body" 
              style={{background: props.themeMode==='light'?'white': props.themeColor+'90'}}
            >
              <ul>
                <li>
                  <b>Spell Checking</b>
                </li>
                <li>
                  <b>Case Conversion</b>
                </li>
                <li>
                  <b>Email Extractor</b>
                </li>
                <li>
                  <b>Character Count</b>
                </li>
                <li>
                  <b>Word Count</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div 
            className="card-header" 
            id="headingTwo"
            style={{background: props.themeMode==='light'?'whitesmoke': props.themeColor}}
          >
            <h2 className="mb-0">
              <button onClick={openPanel} className={`btn btn-link text-${props.themeMode==='light'?'dark':'light'}`} style={{ color: "#183755",  textDecoration: 'none' }} type="button" data-toggle="collapse" data-target="collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Why Choose TextUtils?
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div 
              className="card-body"
              style={{background: props.themeMode==='light'?'white': props.themeColor+'90'}}
            >
              <ul>
                <li>
                  <b>User-Friendly: </b>Our platform is designed with simplicity in mind, ensuring that even those with no technical background can use it effectively.
                </li>
                <li>
                  <b>Fast and Reliable: </b>Enjoy quick and accurate text processing, thanks to our robust algorithms and servers.
                </li>
                <li>
                  <b>Privacy: </b>Your data's security matters to us. TextUtils is committed to keeping your text private and secure.
                </li>
                <li>
                  <b>Free to Use: </b>Most of our text manipulation tools are free for everyone to use.
                </li>
                <li>
                  <b>No Installation Required: </b>TextUtils is a web-based platform, so you can access it from anywhere with an internet connection, without the need for downloads or installations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2 my-4">
        <h4>Get Started with TextUtils Today!</h4>
        <div>Whether you're a student writing a research paper, a developer working with code, or a creative writer polishing your manuscript, TextUtils is here to assist you. Start harnessing the power of text manipulation to streamline your work and achieve better results.</div>
      </div>
    </div>
  </>

}

export default About;