import '../resources/style.css';
import ThemeContext, { themes } from '../themes';
import App from 'next/app';
import Link from 'next/link';

class Root extends App {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.dark,
    };
  }

  changeTheme = () => {
    const nextTheme =
      this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({ theme: nextTheme });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ul className='top-menu'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/posts/[id]' as='/posts/1'>
              <a>Post 1</a>
            </Link>
          </li>
          <li>
            <Link href='/now'>
              <a>Now</a>
            </Link>
          </li>
          <li>
            <Link href='/hooks'>
              <a>React Hook</a>
            </Link>
          </li>
          <li>
            <a onClick={this.changeTheme}>Change Theme</a>
          </li>
        </ul>
        <div className='content-container'>
          <Component {...pageProps} />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Root;
