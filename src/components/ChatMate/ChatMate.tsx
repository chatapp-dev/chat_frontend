import ChatList from "./ChatList/ChatList";
import Info from "./Info/Info";
import Online from "./Online/Online";
import RoomsList from "./RoomsList/RoomsList";
import SiderbarLeft from "./SiderbarLeft/SiderbarLeft";
import styles from "./chatMate.module.scss";

const ChatMate = () => {
  return (
    <div className={styles.wrapper}>
      <SiderbarLeft />
      <RoomsList />
      <ChatList />
      <Info />
      <Online />
    </div>
  );
};

export default ChatMate;
