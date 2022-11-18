let foo: { [index: string]: string } = {};

foo["en"] = `
<h2>Education</h2>
<div class="aboutWrapper">
  <img src="img/chief.png" alt="Illinois Chief Logo" />
  <ul>
    <li><b>University of Illinois at Urbana-Champaign</b></li>
    <br />
    <li class="onMobile">M.C.S. in Data Science</li>
    <li class="onPC">Master of Computer Science in Data Science</li>
    <li class="onMobile">B.Sc. in Accountancy (Honor)</li>
    <li class="onPC">Bachelor of Science in Accountancy (Honor)</li>
    <li class="onMobile">B.Sc. in Finance (Honor)</li>
    <li class="onPC">Bachelor of Science in Finance (Honor)</li>
    <li>Minor in Computer Science</li>
  </ul>
</div>
`;

foo["kr"] = `
<h2>학력 사항</h2>
<div class="aboutWrapper">
  <img src="img/chief.png" alt="Illinois Chief Logo" />
  <ul>
    <li><b>University of Illinois at Urbana-Champaign</b></li>
    <br />
    <li class="onMobile">컴퓨터 과학 석사 - 데이터 사이언스</li>
    <li class="onPC">컴퓨터 과학 석사 - 데이터 사이언스</li>
    <li class="onMobile">회계학 학사 (명예졸업)</li>
    <li class="onPC">회계학 학사 (명예졸업)</li>
    <li class="onMobile">금융학 학사 (명예졸업)</li>
    <li class="onPC">금융학 학사 (명예졸업)</li>
    <li>컴퓨터 과학 부전공</li>
  </ul>
</div>
`;

export default foo;
