import { Link } from "react-router";
import Container from "./container";
import cx from 'classnames';


interface MainHeaderProps extends React.ComponentProps<typeof Container>{}

export default function MainHeader({className, ...props}: MainHeaderProps) {
    return (
        <Container 
            as="header"
            className={cx("felx justify-between items-center gap-10", className)} {...props}
        >
            <Link>
            </Link>

        </Container>
    );
}