export async function initMyLib() {
    console.log('Initializing my Lib');
    await new Promise(res => setTimeout(res, 500));
    console.log('Init completed');
}