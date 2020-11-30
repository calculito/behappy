import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
export default function Art({ onGridClick }) {
  const artlinks = [
    "https://images.unsplash.com/photo-1541680670548-88e8cd23c0f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80",
    "https://images.unsplash.com/photo-1533502565527-e1bda1ad5969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1463277261818-d24c3cdbe40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1582561424752-9b3fce4d9341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=717&q=80",
    "https://images.unsplash.com/photo-1580136608079-72029d0de130?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1579783483346-b4b3f315096b?ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
    "https://images.unsplash.com/photo-1578321926534-133bb2a9f080?ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80",
    "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
    "https://images.unsplash.com/photo-1580136608071-ea92ad6f35a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=908&q=80",
    "https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1582469566055-ae79af7370d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1570744389406-f9dcdcb67ba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1600697522759-35621f75e874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1600932717369-d507b606a25d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533158388470-9a56699990c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1538935118162-fa31d31b48a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1544867885-2333f61544ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1547366785-564103df7e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/flagged/photo-1552863474-9e7df7c5fc47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1581534443478-b26142539596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1562447141-1967e069fd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1582517502291-39994cf3aaec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585157603822-6ea06da9a49a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583846800540-9a28bf575c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1515875294982-4796669a7932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1579169233264-1f7866d3a890?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1555443805-658637491dd4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1556850003-5adb86031c6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1537632083056-f557a4e1e01f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzV8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1578059457703-850565b053f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1561839561-b13bcfe95249?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODB8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1602793776911-3159b8ead108?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTl8fGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1578925773717-a41e4a7fa4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1577083287736-570a5c9a0864?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU0fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583934555930-d62f1749783c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc4fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1577720643252-4b2814e04d7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjA2fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1584285146357-2ba226bb1968?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjczfHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1579947642314-54b5f8c806ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzMzfHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1599583132759-be5fb8896440?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQwfHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1581872553286-2746c6a8b295?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQzfHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzQ4fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1595916430766-95b932a5b032?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzk1fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQzfHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583934555920-8a26b7d75598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDU1fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1576427447029-99e08a494ac0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDY0fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTc4fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1549755083-4cfb18d5b6d0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjM1fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1568700104653-982d48358d76?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjczfHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1584569452853-38c4b4d8389e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjkzfHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583934555960-0ae3e0f71992?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzA4fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585068982294-e3b384b7f668?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTY4fHxhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1581705809989-ff72d7dfdfa6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3Mnx8YXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588359619755-12093e6fbe3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE2MXx8YXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1565123005260-e0a5ae3d9509?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxNnx8YXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1579168730074-5b6e09b79741?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGltcHJlc3Npb25pc218ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1579783483346-b4b3f315096b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGltcHJlc3Npb25pc218ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1539151332289-1693b0b77f89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGltcHJlc3Npb25pc218ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1543930750-f6249d6e0010?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhwcmVzc2lvbmlzbXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1571038520780-c9a190208386?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGV4cHJlc3Npb25pc218ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1541851453353-f48cc7d41659?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fGV4cHJlc3Npb25pc218ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1578393098337-5594cce112da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDE2ODk0Mnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533935941-bceebd58a1af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXR1ZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1574967197715-556d5468c1af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTJ8fHN0YXR1ZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1574507205452-1e2f072e3dd4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjIxfHxzdGF0dWV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1551377826-154f8da12dcd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBhcnR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1595948215841-6cb1669192e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGFzaWFuJTIwYXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585157603822-6ea06da9a49a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGphcGFuJTIwYXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585157603606-0770fc544960?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGphcGFuJTIwYXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585159812874-5b84415c0091?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGphcGFuJTIwYXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585157603875-17aacca6182a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHxqYXBhbiUyMGFydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1578301978069-45264734cddc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjM1fHxhZnJpY2FuJTIwYXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
  ];
  const sendit = () => {
    Swal.fire({
      title: "C'mon!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };
  //generate a random number between min and max
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let nr = getRandomInt(0, 79);

  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <img
        className="bigPicture"
        src={artlinks[nr]}
        alt={"art"}
        onClick={sendit}
      />
      <div className="minitext">https://unsplash.com/s/photos/art</div>
    </div>
  );
}
