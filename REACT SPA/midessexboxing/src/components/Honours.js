import React from "react";
import "../style.css";

export default function honours() {
  return (
    <div class="honours">
      <h1>Our Achievements</h1>
      <p>
        Since competitions resumed after the COVID-19 pandemic, Mid Essex Boxing
        Club has made extraordinary strides, punching well above its weight for
        a club of our size. Our dedicated boxers have showcased their skills at
        national competitions and prestigious Box Cups across the country.
        Below, we proudly highlight some of our most significant achievements;
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <img src="./images/england_boxing.jpg" />
            </td>
            <td>
              <h2>England Boxing National Championships</h2>
              <ul>
                <li>
                  1 x National Champion
                  <br /> <span class="winname">(Elin Chapman)</span>
                </li>
                <li>
                  2 x National Finalists
                  <br />{" "}
                  <span class="winname">(Elin Chapman, Manny Mohamed)</span>
                </li>
                <li>
                  1 x Development Finalist
                  <br /> <span class="winname">(Manny Mohamed)</span>
                </li>
                <li>
                  4 x National Semi-finalists
                  <br />{" "}
                  <span class="winname">
                    (Elin Chapman, Manny Mohamed, Tommy Pemberton, Megan King)
                  </span>
                </li>
                <li>
                  5 x National Quarter-finalists
                  <br />{" "}
                  <span class="winname">
                    (2 x Manny Mohamed, 3 x Tyler O'Connor)
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <img src="./images/NABGC.png" />
            </td>
            <td>
              <h2>NABGC National Championships</h2>
              <ul>
                <li>
                  1 x National Champion
                  <br /> <span class="winname">(Megan King)</span>
                </li>
                <li>
                  2 x National Finalists
                  <br />{" "}
                  <span class="winname">(Manny Mohamed, Sophia Sanchez)</span>
                </li>
                <li>
                  3 x Quarter-finalists
                  <br />{" "}
                  <span class="winname">
                    (Manny Mohamed, 2 x Junior Gullam)
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <img src="./images/eastern-counties.jpg" />
            </td>
            <td>
              <h2>Eastern Counties Championships</h2>
              <ul>
                <li>
                  1 x Eastern Counties Champion
                  <br /> <span class="winname">(TJ Jarvis-Brown)</span>
                </li>
                <li>
                  3 x Eastern Counties Finalists
                  <br />{" "}
                  <span class="winname">
                    (Tamuno Bamson, Stanley Brown, Luca Sechi)
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <img src="./images/box_cups.png" />
            </td>
            <td>
              <h2>Box Cups</h2>
              <ul>
                <li>
                  1 x Box Cup Champion
                  <br /> <span class="winname">(Megan King)</span>
                </li>
                <li>
                  2 x Box Cup Finalists
                  <br />{" "}
                  <span class="winname">(Sophia Sanchez, Luca Sechi)</span>
                </li>
                <li>
                  1 x Box Cup Semi-finalist
                  <br /> <span class="winname">(Sophia Sanchez)</span>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
