// nav.js
const phinixNav = `
<div id="phinix-nav-container" style="background: #0d1117; border-bottom: 2px solid #30363d; padding: 10px; position: sticky; top: 0; z-index: 9999; display: flex; gap: 8px; overflow-x: auto; white-space: nowrap; align-items: center; -webkit-overflow-scrolling: touch;">
    <span style="color: #ffca28; font-weight: bold; margin-right: 10px; font-family: monospace; border: 1px solid #ffca28; padding: 2px 5px; border-radius: 3px; font-size: 12px;">PHINIX PRO</span>
    
    <a href="index.html" style="color: #ffffff; text-decoration: none; font-size: 11px; background: #238636; padding: 6px 12px; border-radius: 4px; font-weight: bold;">📥 INPUT</a>
    <a href="addpattern.html" style="color: #ffffff; text-decoration: none; font-size: 11px; background: #bf3989; padding: 6px 12px; border-radius: 4px; font-weight: bold;">➕ FACTORY</a>

    <a href="env.html" style="color: #4fc3f7; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">🧠 INTEL</a>
    <a href="oldsp.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">🛡️ SENTINEL</a>
    <a href="olds.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">🔢 10-LAG</a>
    <a href="ensemble.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">📊 ENSEMBLE</a>
    <a href="boxratio.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">📈 RATIO</a>

    <a href="countall.html" style="color: #2eb872; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">🎯 ALL</a>
    <a href="countspt.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">📍 SPOT</a>
    <a href="countst.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">📈 ST</a>
    <a href="countflw.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">🌊 FLOW</a>
    <a href="countcatt.html" style="color: #c9d1d9; text-decoration: none; font-size: 11px; border: 1px solid #30363d; padding: 5px 10px; border-radius: 4px;">🐱 CAT</a>
</div>
`;

// Inject into the top of the body
document.body.insertAdjacentHTML('afterbegin', phinixNav);

// Add a small spacer so the nav doesn't cover the top of your content
document.body.style.paddingTop = "55px";