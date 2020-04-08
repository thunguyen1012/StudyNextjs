import '../resources/style.css';
import App from 'next/app';
import Link from 'next/link';

class Root extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
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
        </ul>
        <div className='content-container'>
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}

export default Root;
