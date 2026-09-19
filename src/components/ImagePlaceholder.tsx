import React, { useState } from 'react';
import { Image as ImageIcon, Copy, Check, X, Plus } from 'lucide-react';


interface ImagePlaceholderProps {
  label?: string;
  prompt: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = 'Khung tư liệu ảnh minh họa',
  prompt,
  aspectRatio = 'landscape',
  className = '',
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputUrl, setInputUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const ratioClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : 'aspect-[16/9]';

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setImageUrl(inputUrl.trim());
      setIsEditing(false);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl('');
    setInputUrl('');
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${imageUrl ? 'border-slate-300 shadow-md bg-black' : 'border-dashed border-red-300/80 bg-gradient-to-br from-red-50/40 via-amber-50/30 to-slate-50 shadow-sm'} ${className}`}>
      {imageUrl ? (
        <div className={`relative w-full ${ratioClass} group`}>
          <img
            src={imageUrl}
            alt={label}
            className="w-full h-full object-cover rounded-2xl"
            onError={() => {
              alert('Không thể tải ảnh từ URL này. Vui lòng kiểm tra lại đường link.');
              setImageUrl('');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                {label}
              </span>
              <button
                onClick={handleRemoveImage}
                className="p-1.5 rounded-full bg-red-600/80 hover:bg-red-700 text-white transition-colors cursor-pointer"
                title="Gỡ ảnh này"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/90 line-clamp-2">{prompt}</p>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center justify-center p-6 text-center ${ratioClass}`}>
          <div className="w-12 h-12 mb-3 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shadow-inner ring-4 ring-red-50">
            <ImageIcon className="w-6 h-6" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100/80 text-red-800 mb-2">
            📸 {label}
          </span>

          <p className="text-xs text-slate-600 max-w-md line-clamp-3 leading-relaxed mb-4 italic">
            "{prompt}"
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Đã chép gợi ý</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Chép từ khóa tìm ảnh</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Chèn link ảnh</span>
            </button>
          </div>

          {isEditing && (
            <form onSubmit={handleApplyUrl} className="mt-4 w-full max-w-md animate-fadeIn">
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="Dán link ảnh (https://...)..."
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-xs px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Xác nhận
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
