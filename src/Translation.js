import './css/Translation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { RotateCw } from 'react-feather';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState, useRef, createContext, useEffect } from 'react';
import Translate from './function/Translate';
import Footer from './function/Footer';
import MakeDB from './function/MakeDB';
import MakeFunc from './function/MakeFunc';
import Logout2 from './function/Logout2';

function Translation() {
  const [LoginState, setLoginState] = useState(true);
  const [code, setCode] = useState("");
  const [query_selector, setQuery_selector] = useState("");
  const [database_name, setDatabase_name] = useState("");
  const [function_name, setFunction_name] = useState("");
  const [result, setResult] = useState("");
  const [language_name, setLanguage_name] = useState("PYTHON")
  const [language, setLanguage] = useState(0);
  const str = "run {hello}"
  const q = str.split(" ");
  const copy2 = async () => {
    await navigator.clipboard.writeText(result);
  }

  return (

    <div className='app'>
      <header>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}>FunktionsQL</Link>
        <nav>
          {/* {LoginState === false ? (<Login />) : (<Logout />)} */}
          <span>{localStorage.getItem("username")}</span><Button onClick={Logout2} variant="outline-success">로그아웃</Button>
        </nav>
      </header>
      {language}  {/* 언어변경 잘되나 확인용 */}
      <hr id='hr' />
      <div className='total'>
        <div className='translate'>
          <div className="row" >
            <div className='col-6'   >
              <div>
                <div className="dropdown">
                  <div className='langselect'>{language_name} ▼</div>
                  <div className="dropdown-content">
                    <div className="container">
                      <div className="row align-items-start">
                        <div className="col dropdown-item" onClick={() => { setLanguage_name('PYTHON'); setLanguage(0); }} >PYTHON</div>
                        <div className="col dropdown-item" onClick={() => { setLanguage_name('NODEJS'); setLanguage(1); }} >NODEJS</div>
                        <div className="col dropdown-item" onClick={() => { setLanguage_name('JAVA'); setLanguage(2); }} >JAVA</div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col dropdown-item" onClick={() => { setLanguage_name('RUBY'); setLanguage(3); }} >RUBY</div>
                        <div className="col dropdown-item" onClick={() => { setLanguage_name('GO'); setLanguage(4); }} >GO</div>
                        <div className="col dropdown-item" ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 언어선택1 */}
            <div className='col-6' >
            </div>
          </div>
        </div>
        {/* 언어선택2 */}
        <div className="row" >
          <div className="col-6" id='inner'>
            <div><textarea className='text1' placeholder="코드써라." id='code' value={code} onChange={(e) => setCode(e.target.value)} /></div>
            <Button variant="outline-success" id="translate-btn" onClick={() => Translate(setResult)}>쿼리실행</Button>
          </div>
          <div className="col-6" id='inner'>
            <div><textarea className='text2' placeholder="쿼리써라." id='query_selector' value={query_selector} onChange={(e) => setQuery_selector(e.target.value)} /></div>

            <div><div className='text3' id="result" value={result} >{result}</div></div>
            <Button variant="outline-success" id="translate-btn" onClick={copy2} >복사</Button>
          </div>
        </div>
        <input type='text' placeholder='데이터베이스이름' id='database_name' value={database_name} onChange={(e) => setDatabase_name(e.target.value)} ></input>
        <button  className='fun_but' onClick={MakeDB}>DB만들기</button>
        <input type='text' placeholder='함수이름' id='function_name' value={function_name} onChange={(e) => setFunction_name(e.target.value)} ></input>
        <button className='fun_but' onClick={MakeFunc}>Function만들기</button>
        <input type='text' id='lang_name' value={language} style={{ display: 'none' }} ></input>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
function Login() {
  return (
    <div>
      <Link to="/login" id="header-sub" style={{ textDecoration: 'none' }}><span>로그인</span></Link>
      <Link to="/sg" id="header-sub" style={{ textDecoration: 'none' }}><span>회원가입</span></Link>
    </div>
  );
}
function Logout() {
  return (
    <div>
      <div>{localStorage.getItem("username")}</div><Button onClick={Logout2} variant="outline-success">로그아웃</Button>
    </div>
  );
}

export default Translation;