import Link from 'next/link';

const Menu = ({ menu }) => {
  return (
    <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block end-0">
      <nav>
        <ul>
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href}>
                  <a>
                    {item.title}
                    {item.children && <i className="fi-rs-angle-down"></i>}
                    {item.children && (
                      <ul className="sub-menu">
                        {item.children.map((child, idx) => {
                          return (
                            <li key={idx}>
                              <Link href={child.href}>
                                <a>{child.title}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
