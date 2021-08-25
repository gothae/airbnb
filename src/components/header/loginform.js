export default function LoginForm(){
    return(
        <form method="POST">
            <input
                className="w-4 mx-auto"
                type="number"
                placeholder="전화번호"
            />
            <button type="submit" value="계속" />
        </form>
    );
}