import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_SHOW_PROFILE } from "../../store/profile/action";


export const Profile = () => {
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.isShow);

    return (
        <div>
            <h1>Profile</h1>

            <input type="checkbox" defaultChecked={isShow} onChange={() => {
                dispatch({
                    type: TOGGLE_SHOW_PROFILE
                })
            }} />



        </div>
    );
};