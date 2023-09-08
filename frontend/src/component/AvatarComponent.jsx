import { Avatar } from "react-native-paper";

const AvatarComponent = ({ size, label, color, backgroundColor }) => (
	<Avatar.Text
		size={size || 30}
		label={label?.[0].toUpperCase() || "N/A"}
		color={color || "black"}
		style={{
			backgroundColor: backgroundColor || "grey",
		}}
	/>
);

export default AvatarComponent;
