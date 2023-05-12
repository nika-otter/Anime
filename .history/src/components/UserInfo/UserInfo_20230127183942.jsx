import classes from "./UserInfo.module.scss";
const UserInfo = (props) => {
  return (
    <div className="classes.full_info">
      <div className={classes.img}>
        <img src={props.user.photoURL} alt="" />
      </div>
      <div className="classes.general">
        <div className={classes.info}>
          Name:{" "}
          {props.user.displayName === null ? ". . ." : props.user.displayName}
        </div>
        <div className={classes.info}>
          Email: {props.user.email === null ? ". . ." : props.user.email}
        </div>
        <div className={classes.info}>
          Creation time:{" "}
          {props.user.metadata?.creationTime === null
            ? ". . ."
            : props.user.metadata?.creationTime}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
