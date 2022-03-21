import BaseLink from "../components/shared/BaseLink";

export default function Home() {
  return (
    <div className="container my-3">
      <BaseLink route={"/admin"} text={"Admin Portal"}/>
      <BaseLink route={"/driver"} text={"Driver Portal"}/>

    </div>
  );
}
