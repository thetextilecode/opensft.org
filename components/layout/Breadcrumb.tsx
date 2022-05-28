import Link from "next/link";

export interface IBreadcrumb {
    noBreadcrumb?: any,
    parent?: any,
    sub?: any,
    subChild?: any
}

const Breadcrumb = ({parent, sub, subChild, noBreadcrumb}: IBreadcrumb) => {
    return (
        <>
            <div className={`page-header breadcrumb-wrap ${noBreadcrumb}`}>
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/"><a>
                            {parent}
                        </a>
                        </Link>
                        <span></span> {sub}
                        <span></span> {subChild}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
