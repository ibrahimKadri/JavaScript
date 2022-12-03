function copyBtn() {
    var CopyText = document.getElementById('text');
    CopyText.select();
    navigator.clipboard.writeText(CopyText.value);
    alert("Text copied to clipboard");
}