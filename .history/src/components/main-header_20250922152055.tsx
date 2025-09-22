import { Link } from "react-router";
import Container from "./container";
import Logo from "../assets/images/galeria-plus-full-logo.svg?react";
import cx from 'classnames';


interface MainHeaderProps extends React.ComponentProps<typeof Container>{}

export default function MainHeader({className, ...props}: MainHeaderProps) {
    return (
        <Container 
            as="header"
            className={cx("felx justify-between items-center gap-10", className)} {...props}
        >
            <Link to="/">
                <Logo className="h-5"/>
            </Link>

            <div className="flex items-center gap-3">
                <Bu
            </div>

        </Container>
    );
}