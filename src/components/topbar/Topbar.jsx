import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						genius.
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+39 376 89 32</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>test@yahoo.com</span>
					</div>
				</div>

				<div className="right">this is right</div>
			</div>
		</div>
	);
}
