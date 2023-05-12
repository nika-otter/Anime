// import classes from "./Error.module.scss";
const UserInfo = (props) => {
  return (
    <>
      <div className="classes.general">
        <div>
          Name:{" "}
          {props.user.displayName === null ? ". . ." : props.user.displayName}
        </div>
        <div>
          Email: {props.user.email === null ? ". . ." : props.user.email}
        </div>
        <div>
          Creation time:{" "}
          {props.user.metadata.creationTime === null
            ? ". . ."
            : props.user.metadata.creationTime}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
