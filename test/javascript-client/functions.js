
export function CheckIfLogin(usernameInLocalStorage) {
    let bool = false;
    if (usernameInLocalStorage!="") {
        bool = true;
        return  bool;
    } else {
        return bool;
    }

}

